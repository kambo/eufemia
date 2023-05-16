import React, { useContext } from 'react'
import { DatePicker } from '../../../components'
import { useInput } from './hooks'
import { InputProps } from '../input-types'
import Context from '../../../shared/Context'

export interface Props extends InputProps<string> {
  className?: string
  stretch?: boolean
  // Validation
  required?: boolean
}

export default function DateInput(props: Props) {
  const context = useContext(Context)
  const preparedProps: Props = {
    ...props,
    fromInput: ({ date }: { date: string }) => {
      return date
    },
  }

  const {
    className,
    label,
    value,
    error,
    disabled,
    stretch = false,
    onFocus,
    onBlur,
    onChange,
  } = useInput(preparedProps)

  return (
    <DatePicker
      className={className}
      label={label ?? context?.translation.Deposit.dateLabel}
      label_direction="vertical"
      date={value}
      status={error?.message}
      disabled={disabled}
      show_input={true}
      show_cancel_button={true}
      show_reset_button={true}
      on_change={onChange}
      on_show={onFocus}
      on_hide={onBlur}
      stretch={stretch}
    />
  )
}
