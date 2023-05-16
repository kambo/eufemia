import React, { useContext } from 'react'
import { Input, Textarea } from '../../../components'
import { InputProps as EufemiaInputProps } from '../../../components/input/Input'
import { SpaceType } from '../../../components/space/types'
import Context from '../../../shared/Context'
import InputBlock from '../InputBlock/InputBlock'
import { useInput } from './hooks'
import type { InputProps } from '../input-types'

interface ErrorMessages {
  required?: string
  schema?: string
  minLength?: string
  maxLength?: string
  pattern?: string
}
export interface Props
  extends InputProps<string, undefined, ErrorMessages> {
  className?: string
  inputClassName?: string
  type?: EufemiaInputProps['type']
  stretch?: boolean
  multiline?: boolean
  leftIcon?: string
  rightIcon?: string
  clear?: boolean
  autoresize?: boolean
  autoresizeMaxRows?: number
  characterCounter?: boolean
  // Validation
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: string
  // Bridge props to Eufemia components
  space?: SpaceType
}

export default function DataInputString(props: Props) {
  const context = useContext(Context)

  const preparedProps: Props = {
    ...props,
    errorMessages: {
      required: context?.translation.Deposit.inputErrorRequired,
      minLength:
        context?.translation.Deposit.stringInputErrorMinLength.replace(
          '{minLength}',
          props.minLength?.toString()
        ),
      maxLength:
        context?.translation.Deposit.stringInputErrorMaxLength.replace(
          '{maxLength}',
          props.maxLength?.toString()
        ),
      pattern: context?.translation.Deposit.inputErrorPattern,
      ...props.errorMessages,
    },
    schema: props.schema ?? {
      type: 'string',
      minLength: props.minLength,
      maxLength: props.maxLength,
      pattern: props.pattern,
    },
    fromInput: ({ value: valueFromInput }: { value: string }) => {
      if (valueFromInput === '') {
        return props.emptyValue
      }
      return valueFromInput
    },
  }
  const {
    className,
    path,
    'data-testid': dataTestId,
    inputClassName,
    layout,
    type,
    stretch = true,
    placeholder,
    label,
    labelDescription,
    labelSecondary,
    value,
    info,
    warning,
    error,
    disabled,
    multiline,
    leftIcon,
    rightIcon,
    clear,
    space,
    autoresize = true,
    autoresizeMaxRows = 6,
    characterCounter,
    onFocus,
    onBlur,
    onChange,
  } = useInput(preparedProps)

  const characterCounterElement = characterCounter
    ? props.maxLength
      ? `${value?.length ?? '0'}/${props.maxLength}`
      : `${value?.length ?? '0'}`
    : undefined

  return (
    <InputBlock
      layout={layout}
      label={label}
      labelDescription={labelDescription}
      labelSecondary={labelSecondary ?? characterCounterElement}
      info={info}
      warning={warning}
      error={error}
    >
      {multiline ? (
        <Textarea
          className={className}
          textarea_class={inputClassName}
          data-testid={dataTestId ?? path ?? 'string-input'}
          placeholder={placeholder}
          value={value}
          on_focus={onFocus}
          on_blur={onBlur}
          on_change={onChange}
          autoresize={autoresize}
          autoresize_max_rows={autoresizeMaxRows}
          disabled={disabled}
          space={space}
          stretch
        />
      ) : (
        <Input
          className={className}
          input_class={inputClassName}
          data-testid={dataTestId ?? path ?? 'string-input'}
          type={type}
          placeholder={placeholder}
          value={value ?? ''}
          size="medium"
          icon={leftIcon ?? rightIcon}
          icon_position={rightIcon && !leftIcon ? 'right' : undefined}
          clear={clear}
          on_focus={onFocus}
          on_blur={onBlur}
          on_change={onChange}
          disabled={disabled}
          stretch={stretch}
          space={space}
        />
      )}
    </InputBlock>
  )
}
