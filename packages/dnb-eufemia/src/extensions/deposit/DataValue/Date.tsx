import React, { useContext } from 'react'
import StringComponent, { Props as StringComponentProps } from './String'
import Context from '../../../shared/Context'

export type Props = StringComponentProps

export default function DataValueDate(props: Props) {
  const context = useContext(Context)

  const stringProps: Props = {
    ...props,
    label: props.label ?? context?.translation.Deposit.dateLabel,
  }
  return <StringComponent {...stringProps} />
}
