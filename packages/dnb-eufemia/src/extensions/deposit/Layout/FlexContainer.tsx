import React from 'react'
import classNames from 'classnames'
import * as styles from './FlexContainer.module.scss'

export type Props = {
  className?: string
  children: React.ReactNode
  direction?: 'row' | 'column'
  wrap?: boolean
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  divider?: 'space' | 'line'
  spacing?: false | 'small' | 'medium'
}

export default function FlexContainer({
  className,
  children,
  direction = 'column',
  wrap = false,
  justify = 'flex-start',
  align = 'stretch',
  divider = 'space',
  spacing = 'small',
}: Props) {
  const cn = classNames(
    styles.flexContainer,
    direction === 'row' && styles.directionRow,
    direction === 'column' && styles.directionColumn,
    justify === 'flex-start' && styles.justifyFlexStart,
    justify === 'flex-end' && styles.justifyFlexEnd,
    justify === 'center' && styles.justifyCenter,
    justify === 'space-between' && styles.justifySpaceBetween,
    justify === 'space-around' && styles.justifySpaceAround,
    justify === 'space-evenly' && styles.justifySpaceEvenly,
    align === 'flex-start' && styles.alignFlexStart,
    align === 'flex-end' && styles.alignFlexEnd,
    align === 'center' && styles.alignCenter,
    align === 'stretch' && styles.alignStretch,
    align === 'baseline' && styles.alignBaseline,
    wrap && styles.wrap,
    divider === 'space' && styles.dividerSpace,
    divider === 'line' && styles.dividerLine,
    spacing === false && styles.spacingNone,
    spacing === 'small' && styles.spacingSmall,
    spacing === 'medium' && styles.spacingMedium,
    className
  )

  return <div className={cn}>{children}</div>
}
