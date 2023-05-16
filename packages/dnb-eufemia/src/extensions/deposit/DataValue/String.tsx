import React from 'react'
import Value from '../Value/Value'
import { useValue } from './hooks'
import { ValueProps } from '../value-types'

export interface Props extends ValueProps<string> {
  className?: string
}

export default function DataValueString(props: Props) {
  const { className, label, placeholder, value, inline, showEmpty } =
    useValue(props)

  return (
    <Value
      className={className}
      label={label}
      showEmpty={showEmpty}
      placeholder={placeholder}
      inline={inline}
    >
      {value}
    </Value>
  )
}
