import React from 'react'
import { Heading } from '../../../components'
import { SpaceType } from '../../../components/space/types'

export interface Props {
  space?: SpaceType
  children: React.ReactNode
}

export default function MainHeading({ space, children }: Props) {
  return (
    <Heading
      level="2"
      size="large"
      space={space ?? { top: '0', bottom: 'small' }}
    >
      {children}
    </Heading>
  )
}
