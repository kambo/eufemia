import React, { useContext, useCallback } from 'react'
import { Checkbox, ToggleButton, Button, Space } from '../../../components'
import classNames from 'classnames'
import ButtonRow from '../Layout/ButtonRow'
import InputBlock from '../InputBlock/InputBlock'
import { useInput } from './hooks'
import { InputProps } from '../input-types'
import Context from '../../../shared/Context'

export interface Props extends InputProps<boolean> {
  className?: string
  variant?: 'checkbox' | 'toggle-button' | 'toggle-checkbox' | 'buttons'
}

export default function BooleanInput(props: Props) {
  const context = useContext(Context)
  const {
    className,
    'data-testid': dataTestId,
    layout,
    variant,
    disabled,
    label,
    labelDescription,
    // labelSecondary,
    path,
    value,
    info,
    warning,
    error,
    onChange,
  } = useInput(props)

  const handleChange = useCallback(
    ({ checked }) => {
      onChange?.(checked)
    },
    [onChange]
  )

  const setTrue = useCallback(() => {
    onChange?.(true)
  }, [onChange])

  const setFalse = useCallback(() => {
    onChange?.(false)
  }, [onChange])

  const cn = classNames('boolean-input', className)

  const inputBlockProps = {
    layout,
    label,
    labelDescription,
    // labelSecondary,
    info,
    warning,
    error,
  }

  switch (variant) {
    default:
    case 'checkbox':
      return (
        <Checkbox
          className={cn}
          data-testid={dataTestId ?? path ?? 'boolean-input'}
          label={label}
          checked={value}
          disabled={disabled}
          on_change={handleChange}
          status={error?.message}
        />
      )
    case 'toggle-button':
      return (
        <InputBlock {...inputBlockProps}>
          <ToggleButton
            className={cn}
            data-testid={dataTestId ?? path ?? 'boolean-input'}
            text={label}
            checked={value}
            disabled={disabled}
            value={value ? 'true' : 'false'}
            on_change={handleChange}
          />
        </InputBlock>
      )
    case 'toggle-checkbox':
      return (
        <InputBlock {...inputBlockProps}>
          <ToggleButton
            className={cn}
            data-testid={dataTestId ?? path ?? 'boolean-input'}
            variant="checkbox"
            text={label}
            checked={value}
            disabled={disabled}
            value={value ? 'true' : 'false'}
            on_change={handleChange}
          />
        </InputBlock>
      )
    case 'buttons': {
      const id = `boolean-input-${Math.round(Math.random() * 10000000)}`
      return (
        <InputBlock {...inputBlockProps}>
          <ButtonRow data-testid={dataTestId ?? path ?? 'boolean-input'}>
            <Button
              id={id}
              data-testid="boolean-input-option-yes"
              text={context?.translation.Deposit.booleanYes}
              on_click={setTrue}
              variant={value === true ? undefined : 'secondary'}
              status={error ? 'error' : undefined}
              disabled={disabled}
            />
            <Button
              data-testid="boolean-input-option-no"
              text={context?.translation.Deposit.booleanNo}
              on_click={setFalse}
              variant={value === false ? undefined : 'secondary'}
              status={error ? 'error' : undefined}
              disabled={disabled}
            />
          </ButtonRow>
          <Space bottom="x-small" />
        </InputBlock>
      )
    }
  }
}
