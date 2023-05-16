import React from 'react'
import { InputMasked } from '../../../components'
import { useInput } from './hooks'
import { InputProps } from '../input-types'

export interface Props extends InputProps<number> {
  className?: string
  stretch?: boolean
  currency?: string
  // Validation
  required?: boolean
}

export default function CurrencyInput(props: Props) {
  const preparedProps: Props = {
    ...props,
    fromInput: ({
      value,
      numberValue,
    }: {
      value: string
      numberValue: number
    }) => {
      if (value === '') {
        return props.emptyValue
      }
      return numberValue
    },
  }
  const {
    className,
    currency,
    path,
    'data-testid': dataTestId,
    stretch = true,
    placeholder,
    label,
    value,
    error,
    disabled,
    onFocus,
    onBlur,
    onChange,
  } = useInput(preparedProps)

  return (
    <InputMasked
      as_currency={currency ?? true}
      className={className}
      data-testid={dataTestId ?? path ?? 'currency-input'}
      placeholder={placeholder}
      value={value?.toString() ?? ''}
      label={label}
      label_direction="vertical"
      size="medium"
      on_focus={onFocus}
      on_blur={onBlur}
      on_change={onChange}
      status={error?.message}
      disabled={disabled}
      stretch={stretch}
    />
  )
}
