import React, { useContext } from 'react'
import FlexContainer, {
  Props as FlexContainerProps,
} from '../Layout/FlexContainer'
import StepsContext from './StepsContext'

export interface Props {
  children: React.ReactNode
  index?: number
  title?: string
  direction?: FlexContainerProps['direction']
  spacing?: FlexContainerProps['spacing']
}

export default function Step({
  children,
  index,
  direction = 'column',
  spacing = 'medium',
}: Props) {
  const stepsContext = useContext(StepsContext)

  if (stepsContext?.activeIndex !== index) {
    // Another step is active
    return null
  }

  return (
    <FlexContainer direction={direction} spacing={spacing}>
      {children}
    </FlexContainer>
  )
}
