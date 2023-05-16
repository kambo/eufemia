import React, { useContext } from 'react'
import { Button } from '../../../components'
import { ButtonProps } from '../../../components/button/Button'
import StepsContext from './StepsContext'

export interface Props extends ButtonProps {
  children?: string
  'data-testid'?: string
}

export default function PreviousStepButton({
  children = 'Tilbake',
  variant = 'tertiary',
  icon_position = 'left',
  icon = 'chevron_left',
  'data-testid': dataTestId,
}: Props) {
  const stepsContext = useContext(StepsContext)

  return (
    <Button
      data-testid={dataTestId ?? 'previous-step-button'}
      onClick={stepsContext?.handlePrevious}
      variant={variant}
      icon_position={icon_position}
      icon={icon}
    >
      {children}
    </Button>
  )
}
