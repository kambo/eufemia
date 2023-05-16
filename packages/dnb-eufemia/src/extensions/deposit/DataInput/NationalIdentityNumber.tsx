import React, { useContext } from 'react'
import StringComponent, { Props as StringComponentProps } from './String'
import Context from '../../../shared/Context'
import { inputStyle } from './NationalIdentityNumber.module.scss'

export interface Props extends StringComponentProps {
  className?: string
  validate?: boolean
  required?: boolean
}

export default function NationalIdentityNumberInput(props: Props) {
  const context = useContext(Context)
  const { validate = true } = props

  const stringInputProps: Props = {
    ...props,
    inputClassName: inputStyle,
    stretch: false,
    pattern: props.pattern ?? (validate ? '^[0-9]{11}$' : undefined),
    label:
      props.label ??
      context?.translation.Deposit.nationalIdentityNumberLabel,
    errorMessages: {
      required:
        context?.translation.Deposit.nationalIdentityNumberErrorRequired,
      pattern:
        context?.translation.Deposit.nationalIdentityNumberErrorPattern,
      ...props.errorMessages,
    },
  }

  return <StringComponent {...stringInputProps} />
}
