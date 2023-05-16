import React, { useContext, useCallback } from 'react'
import { Autocomplete, Input } from '../../../components'
import classNames from 'classnames'
import countries from '../constants/countries'
import { useInput } from './hooks'
import type { InputProps } from '../input-types'
import Context from '../../../shared/Context'
import {
  phoneNumberInputStyle,
  countryCodeInputStyle,
  numberInputStyle,
} from './PhoneNumber.module.scss'

export interface Props extends InputProps<string> {
  className?: string
}

export default function PhoneNumberInput(props: Props) {
  const context = useContext(Context)
  const preparedProps: Props = {
    ...props,
    errorMessages: {
      required: context?.translation.Deposit.phoneNumberErrorRequired,
      ...props?.errorMessages,
    },
  }

  const {
    className,
    'data-testid': dataTestId,
    placeholder,
    label = context?.translation.Deposit.phoneNumberLabel,
    path,
    value,
    emptyValue,
    error,
    disabled,
    onFocus,
    onBlur,
    onChange,
  } = useInput(preparedProps)

  // Split the value into country code and phone number correctly, even if one of them is not
  // filled in (avoiding number ending up in country code etc)
  const [, countryCode = '', phoneNumber = ''] =
    (value ?? '')?.match(/^(\+[^ ]+)? ?(.*)$/) ?? []

  const countriesDropdownData = countries.map((country) => ({
    selected_key: `+${country.code}`,
    selected_value: `+${country.code}`,
    content: `+${country.code} ${country.name}`,
  }))

  const handleCountryCodeChange = useCallback(
    ({ data: changedData }: { data: { selected_value: string } }) => {
      if (
        (!changedData || !changedData.selected_value.trim()) &&
        !phoneNumber.trim()
      ) {
        onChange?.(emptyValue)
        return
      }

      onChange?.(`${changedData.selected_value || ''} ${phoneNumber}`)
    },
    [phoneNumber, emptyValue, onChange]
  )

  const handleNumberChange = useCallback(
    ({ value }: { value: string }) => {
      if (!value.trim() && !countryCode.trim()) {
        onChange?.(emptyValue)
        return
      }

      onChange?.([countryCode, value].filter(Boolean).join(' '))
    },
    [countryCode, emptyValue, onChange]
  )

  return (
    <div
      className={phoneNumberInputStyle}
      data-testid={dataTestId ?? path ?? 'phone-number-input'}
    >
      <Autocomplete
        className={classNames(countryCodeInputStyle, className)}
        data-testid="phone-number-input-country-code"
        label_direction="vertical"
        label={context?.translation.Deposit.countryCodeLabel}
        data={countriesDropdownData}
        value={countryCode}
        disabled={disabled}
        size="medium"
        on_change={handleCountryCodeChange}
        stretch
      />
      <Input
        className={numberInputStyle}
        data-testid="phone-number-input-number"
        stretch
        size="medium"
        label_direction="vertical"
        label={label ?? ' '}
        placeholder={placeholder}
        on_change={handleNumberChange}
        on_focus={onFocus}
        on_blur={onBlur}
        value={phoneNumber}
        status={error?.message}
        disabled={disabled}
        type="tel"
      />
    </div>
  )
}
