import React from 'react'
import { InfoCard } from '../../../components'
import { InfoCardProps } from '../../../components/info-card/InfoCard'
import Section from './Section'

export type Props = InfoCardProps

export default function InfoCardSection(props: Props) {
  return (
    <Section>
      <InfoCard
        {...props}
        title={props.title}
        text={props.text}
        className={props.className}
      />
    </Section>
  )
}
