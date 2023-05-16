import React, { useContext } from 'react'
import StringComponent, { Props as StringComponentProps } from './String'
import Context from '../../../shared/Context'

export interface Props extends StringComponentProps {
  className?: string
  required?: boolean
}

export default function LastNameInput(props: Props) {
  const context = useContext(Context)

  const stringInputProps: Props = {
    ...props,
    label: props.label ?? context?.translation.Deposit.lastNameLabel,
    errorMessages: {
      required: context?.translation.Deposit.lastNameErrorRequired,
      ...props.errorMessages,
    },
  }

  return <StringComponent {...stringInputProps} />
}
