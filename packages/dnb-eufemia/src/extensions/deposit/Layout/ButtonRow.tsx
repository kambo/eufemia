import React from 'react'
import classNames from 'classnames'
import { buttonRowStyle } from './ButtonRow.module.scss'

export interface Props {
  className?: string
  'data-testid'?: string
  children?: React.ReactNode
}

export default function ButtonRow({
  className,
  'data-testid': dataTestId,
  children,
}: Props) {
  const cn = classNames(className, buttonRowStyle)
  return (
    <div className={cn} data-testid={dataTestId ?? 'button-row'}>
      {children}
    </div>
  )
}
