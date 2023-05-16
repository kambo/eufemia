import React, { useContext } from 'react'
import { Button } from '../../../components'
import { ButtonProps } from '../../../components/button/Button'
import StepsContext from './StepsContext'

export interface Props extends ButtonProps {
  children?: string
  'data-testid'?: string
}

export default function NextStepButton({
  children = 'Neste',
  variant = 'primary',
  icon_position = 'right',
  icon = 'chevron_right',
  'data-testid': dataTestId,
}: Props) {
  const stepsContext = useContext(StepsContext)

  return (
    <Button
      data-testid={dataTestId ?? 'next-step-button'}
      onClick={stepsContext?.handleNext}
      variant={variant}
      icon_position={icon_position}
      icon={icon}
    >
      {children}
    </Button>
  )
}
