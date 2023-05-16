import React from 'react'
import { InputProps } from '../input-types'

export interface Props extends InputProps<number | string> {
  className?: string
  title?: string
  text?: string
  children?: React.ReactNode
}

export default function Option({
  className,
  title,
  text,
  children,
}: Props) {
  return (
    <span className={className} role="option">
      {children ?? title}
      {text}
    </span>
  )
}
