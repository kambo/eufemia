import React, { useContext } from 'react'
import StringComponent, { Props as StringComponentProps } from './String'
import Context from '../../../shared/Context'

export type Props = StringComponentProps

export default function EmailInput(props: Props) {
  const context = useContext(Context)

  const stringInputProps: Props = {
    ...props,
    type: props.type ?? 'email',
    pattern:
      props.pattern ??
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    label: props.label ?? context?.translation.Deposit.emailLabel,
    errorMessages: {
      required: context?.translation.Deposit.emailErrorRequired,
      pattern: context?.translation.Deposit.emailErrorPattern,
      ...props.errorMessages,
    },
  }

  return <StringComponent {...stringInputProps} />
}
