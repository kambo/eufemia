import React from 'react'
import FlexContainer, {
  Props as FlexContainerProps,
} from './FlexContainer'
import FlexItem from './FlexItem'
import * as styles from './Card.module.scss'

export interface Props {
  children: React.ReactNode
  stack?: boolean
  direction?: FlexContainerProps['direction']
  spacing?: FlexContainerProps['spacing']
}

export default function Card({
  stack,
  direction,
  spacing,
  children,
}: Props) {
  if (stack) {
    // Shortcut prop
    return (
      <FlexContainer
        className={styles.card}
        direction="column"
        divider="line"
        spacing="medium"
      >
        {children}
      </FlexContainer>
    )
  }

  if (direction || spacing) {
    return (
      <FlexContainer
        className={styles.card}
        direction={direction ?? 'column'}
        divider="space"
        spacing={spacing ?? 'small'}
      >
        {children}
      </FlexContainer>
    )
  }

  return <FlexItem className={styles.card}>{children}</FlexItem>
}
