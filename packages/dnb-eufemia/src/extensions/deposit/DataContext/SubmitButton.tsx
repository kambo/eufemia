import React, { useContext } from 'react'
import { Button } from '../../../components'
import Context from './Context'

export interface Props {
  children?: string
  'data-testid'?: string
}

export default function SubmitDataContextButton({
  children = 'Send',
  'data-testid': dataTestId,
}: Props) {
  const context = useContext(Context)

  return (
    <Button
      onClick={context.handleSubmit}
      data-testid={dataTestId ?? 'submit-data-context-button'}
    >
      {children}
    </Button>
  )
}
