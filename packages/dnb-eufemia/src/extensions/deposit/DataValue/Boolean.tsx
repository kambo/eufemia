import React, { useContext } from 'react'
import Value from '../Value/Value'
import { useValue } from './hooks'
import { ValueProps } from '../value-types'
import Context from '../../../shared/Context'

export interface Props extends ValueProps<boolean> {
  className?: string
}

export default function DataValueBoolean(props: Props) {
  const context = useContext(Context)
  const { className, label, placeholder, showEmpty, value, inline } =
    useValue(props)

  return (
    <Value
      className={className}
      label={label}
      showEmpty={showEmpty}
      placeholder={placeholder}
      inline={inline}
    >
      {value === true || value === false
        ? value === true
          ? context?.translation.Deposit.booleanYes
          : context?.translation.Deposit.booleanNo
        : null}
    </Value>
  )
}
