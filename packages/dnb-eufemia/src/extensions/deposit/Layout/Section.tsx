import React from 'react'
// import { Section as EufemiaSection } from '../../../components'
import FlexContainer, {
  Props as FlexContainerProps,
} from './FlexContainer'

export interface Props {
  direction?: FlexContainerProps['direction']
  spacing?: FlexContainerProps['spacing']
  children: React.ReactNode
}

export default function Section({
  direction = 'column',
  spacing = 'small',
  children,
}: Props) {
  return (
    // <EufemiaSection style_type="transparent" className={styles.section}>
    <FlexContainer direction={direction} spacing={spacing}>
      {children}
    </FlexContainer>
    // </EufemiaSection>
  )
}
