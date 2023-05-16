import React from 'react'
import { formatNumber } from '../utils'
import Value from '../Value/Value'
import { useValue } from './hooks'
import { ValueProps } from '../value-types'

export interface Props extends ValueProps<number> {
  className?: string
  // Formatting
  thousandSeparator?: string
  decimalSymbol?: string
  decimals?: number
  fixedDecimals?: number
  prefix?: string
  suffix?: string
}

export default function DataValueNumber(props: Props) {
  const {
    className,
    label,
    placeholder,
    value,
    inline,
    showEmpty,
    thousandSeparator,
    decimalSymbol,
    decimals,
    fixedDecimals,
    prefix,
    suffix,
  } = useValue(props)

  return (
    <Value
      className={className}
      label={label}
      showEmpty={showEmpty}
      placeholder={placeholder}
      inline={inline}
    >
      {value !== undefined
        ? formatNumber(value, {
            thousandSeparator,
            decimalSymbol,
            decimals,
            fixedDecimals,
            prefix,
            suffix,
          })
        : null}
    </Value>
  )
}
