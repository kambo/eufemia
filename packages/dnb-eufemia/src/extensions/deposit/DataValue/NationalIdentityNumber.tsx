import React, { useContext } from 'react'
import StringComponent, { Props as StringComponentProps } from './String'
import Context from '../../../shared/Context'

export type Props = StringComponentProps

export default function NationalIdentityNumberValue(props: Props) {
  const context = useContext(Context)

  const stringValueProps: Props = {
    ...props,
    label:
      props.label ??
      context?.translation.Deposit.nationalIdentityNumberLabel,
  }
  return <StringComponent {...stringValueProps} />
}
