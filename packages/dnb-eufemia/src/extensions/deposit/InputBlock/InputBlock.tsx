import React from 'react'
import { FormLabel, FormStatus } from '../../../components'
import { Span } from '../../../elements'
import type { InputProps } from '../input-types'
import {
  labelBlockStyle,
  labelDescriptionStyle,
  labelSecondaryStyle,
} from './InputBlock.module.scss'

export type Props = Pick<
  InputProps,
  | 'layout'
  | 'label'
  | 'labelDescription'
  | 'labelSecondary'
  | 'info'
  | 'warning'
  | 'error'
> & {
  children: React.ReactNode
}

export default function InputBlock({
  layout,
  label,
  labelDescription,
  labelSecondary,
  info,
  warning,
  error,
  children,
}: Props) {
  return (
    <div>
      {(label || labelDescription || labelSecondary) && (
        <div className={labelBlockStyle}>
          {label || labelDescription ? (
            <FormLabel
              label_direction={layout}
              space={{ bottom: 'x-small' }}
            >
              {label}
              {labelDescription && (
                <span className={labelDescriptionStyle}>
                  {labelDescription}
                </span>
              )}
            </FormLabel>
          ) : (
            <>&nbsp;</>
          )}
          {labelSecondary && (
            <Span
              className={labelSecondaryStyle}
              // space={{ bottom: 'xxx-small' }}
            >
              {labelSecondary}
            </Span>
          )}
        </div>
      )}

      {children}

      {error && (
        <FormStatus text={error?.message} space={{ top: 'x-small' }} />
      )}
      {warning && (
        <FormStatus
          state="warn"
          text={
            warning instanceof Error ? warning.message : warning.toString()
          }
          space={{ top: 'x-small' }}
        />
      )}
      {info && (
        <FormStatus
          state="info"
          text={info instanceof Error ? info.message : info.toString()}
          space={{ top: 'x-small' }}
        />
      )}
    </div>
  )
}
