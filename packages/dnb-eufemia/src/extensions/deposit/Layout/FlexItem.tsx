import React from 'react'
import classNames from 'classnames'
import * as styles from './FlexItem.module.scss'

export interface Props {
  className?: string
  grow?: boolean
  shrink?: boolean
  children: React.ReactNode
}

export default function FlexItem({
  className,
  grow,
  shrink,
  children,
}: Props) {
  const cn = classNames(
    grow && styles.flexGrow,
    shrink && styles.flexShrink,
    className
  )

  return <div className={cn}>{children}</div>
}
