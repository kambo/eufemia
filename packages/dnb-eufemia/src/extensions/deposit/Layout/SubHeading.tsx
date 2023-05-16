import React from 'react'
import { Heading } from '../../../components'
import { SpaceType } from '../../../components/space/types'

export interface Props {
  space?: SpaceType
  children: React.ReactNode
}

export default function SubHeading({ space, children }: Props) {
  return (
    <Heading
      level="3"
      size="medium"
      space={space ?? { top: '0', bottom: 'small' }}
    >
      {children}
    </Heading>
  )
}
