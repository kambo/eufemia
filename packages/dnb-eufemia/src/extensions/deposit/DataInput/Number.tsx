import React from 'react'
import { Input } from '../../../components'
import { SpaceType } from '../../../components/space/types'
import classNames from 'classnames'
import { formatNumber, parseFormattedNumber } from '../utils'
import InputBlock from '../InputBlock/InputBlock'
import { useInput } from './hooks'
import { InputProps } from '../input-types'

export interface Props extends InputProps<number> {
  className?: string
  stretch?: boolean
  // Formatting
  thousandSeparator?: string
  decimalSymbol?: string
  decimals?: number
  fixedDecimals?: number
  prefix?: string
  suffix?: string
  // Validation
  required?: boolean
  minimum?: number // aka greater than or equal to
  maximum?: number // aka less than or equal to
  exclusiveMinimum?: number // aka greater than
  exclusiveMaximum?: number // aka less than
  multipleOf?: number
  // Bridge props to Eufemia components
  space?: SpaceType
}

export default function DataInputNumber(props: Props) {
  const {
    thousandSeparator,
    decimalSymbol,
    decimals,
    fixedDecimals,
    prefix,
    suffix,
  } = props

  const preparedProps: Props = {
    ...props,
    schema: props.schema ?? {
      type: 'number',
      minimum: props.minimum,
      maximum: props.maximum,
      exclusiveMinimum: props.exclusiveMinimum,
      exclusiveMaximum: props.exclusiveMaximum,
      multipleOf: props.multipleOf,
    },
    toInput: (external: number | undefined) => {
      if (external === undefined) {
        return ''
      }

      return formatNumber(external, {
        thousandSeparator,
        decimalSymbol,
        decimals,
        fixedDecimals,
        prefix,
        suffix,
      })
    },
    fromInput: ({ value: valueFromInput }: { value: string }) => {
      if (valueFromInput === '') {
        return emptyValue
      }
      return parseFormattedNumber(valueFromInput, {
        thousandSeparator,
        decimalSymbol,
        decimals,
        fixedDecimals,
        prefix,
        suffix,
      })
    },
  }

  const {
    className,
    'data-testid': dataTestId,
    layout,
    stretch = true,
    placeholder,
    label,
    labelDescription,
    labelSecondary,
    path,
    value,
    disabled,
    space,
    info,
    warning,
    error,
    emptyValue,
    onFocus,
    onBlur,
    onChange,
  } = useInput(preparedProps)

  const cn = classNames('number-input', className)

  return (
    <InputBlock
      layout={layout}
      label={label}
      labelDescription={labelDescription}
      labelSecondary={labelSecondary}
      info={info}
      warning={warning}
      error={error}
    >
      <Input
        className={cn}
        data-testid={dataTestId ?? path ?? 'number-input'}
        placeholder={placeholder}
        value={value}
        size="medium"
        suffix={suffix}
        on_focus={onFocus}
        on_blur={onBlur}
        on_change={onChange}
        disabled={disabled}
        stretch={stretch}
        space={space}
      />
    </InputBlock>
  )
}
