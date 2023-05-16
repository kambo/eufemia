import React from 'react'
import ButtonRow from '../Layout/ButtonRow'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'

export interface Props {
  children?: string
  'data-testid'?: string
}

export default function Buttons({ 'data-testid': dataTestId }: Props) {
  return (
    <ButtonRow>
      <PreviousButton />
      <NextButton />
    </ButtonRow>
  )
}
