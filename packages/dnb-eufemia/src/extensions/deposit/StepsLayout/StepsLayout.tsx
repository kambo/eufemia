import React, { useContext, useState, useCallback } from 'react'
import { StepIndicator } from '../../../components'
import DataContext from '../DataContext/Context'
import Step, { Props as StepProps } from './Step'
import StepsContext from './StepsContext'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import Buttons from './Buttons'
import * as styles from './StepsLayout.module.scss'

export interface Props {
  children: React.ReactNode
  mode?: 'static' | 'strict' | 'loose'
  scrollTopOnStepChange?: boolean
  initialActiveIndex?: number
  onStepChange?: (index: number) => void
}

function StepsLayout({
  children,
  mode = 'loose',
  scrollTopOnStepChange,
  initialActiveIndex = 0,
  onStepChange,
}: Props) {
  const dataContext = useContext(DataContext)
  const [activeIndex, setActiveIndex] =
    useState<number>(initialActiveIndex)

  const handlePrevious = useCallback(() => {
    setActiveIndex((activeIndex) => {
      onStepChange?.(activeIndex - 1)
      return activeIndex - 1
    })
    if (scrollTopOnStepChange) {
      window?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [scrollTopOnStepChange, onStepChange])

  const handleNext = useCallback(() => {
    if (!dataContext.hasErrors()) {
      setActiveIndex((activeIndex) => {
        onStepChange?.(activeIndex + 1)
        return activeIndex + 1
      })
      if (scrollTopOnStepChange) {
        window?.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      dataContext.setShowAllErrors(true)
    }
  }, [dataContext, scrollTopOnStepChange, onStepChange])

  const stepIndicatorData = React.Children.map(children, (child) => {
    if (!React.isValidElement(child) || child.type !== Step) {
      throw new Error('Only Step can be children of Steps')
    }
    return child.props.title ?? 'Title missing'
  }) as string[]

  const handleChange = useCallback(({ current_step }) => {
    setActiveIndex(current_step)
  }, [])

  return (
    <StepsContext.Provider
      value={{
        activeIndex,
        handlePrevious,
        handleNext,
      }}
    >
      <div className={styles.steps}>
        <aside className={styles.sidebar}>
          <StepIndicator.Sidebar sidebar_id="steps-sidebar" />
          <StepIndicator
            bottom
            current_step={activeIndex}
            data={stepIndicatorData}
            mode={mode}
            no_animation
            on_change={handleChange}
            sidebar_id="steps-sidebar"
            title=""
          />
        </aside>
        <div className={styles.contents}>
          {React.Children.map(children, (child, i) => {
            if (React.isValidElement(child) && child.type === Step) {
              return React.cloneElement(
                child as React.ReactElement<StepProps>,
                {
                  index: i,
                }
              )
            }
            return child
          })}
        </div>
      </div>
    </StepsContext.Provider>
  )
}

StepsLayout.Step = Step
StepsLayout.NextButton = NextButton
StepsLayout.PreviousButton = PreviousButton
StepsLayout.Buttons = Buttons

export default StepsLayout
