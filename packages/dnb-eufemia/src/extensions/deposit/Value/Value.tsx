import React from 'react'
import { FormLabel } from '../../../components'
import classNames from 'classnames'
import { ValueProps } from '../value-types'
import {
  valueStyle,
  inlineStyle,
  labelStyle,
  placeholderStyle,
} from './Value.module.scss'

export interface Props extends Omit<ValueProps<unknown>, 'value'> {
  className?: string
  children?: React.ReactNode
}

export default function StringValue({
  className,
  label,
  inline,
  placeholder,
  showEmpty,
  children,
}: Props) {
  if (
    (children === undefined || children === null || children === false) &&
    !showEmpty &&
    !placeholder
  ) {
    return null
  }

  return (
    <span
      className={classNames(valueStyle, inline && inlineStyle, className)}
    >
      {label && (
        <FormLabel
          className={labelStyle}
          label_direction={inline ? 'horizontal' : 'vertical'}
        >
          {label}
        </FormLabel>
      )}
      {children ?? <span className={placeholderStyle}>{placeholder}</span>}
    </span>
  )
}
