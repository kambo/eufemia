import React from 'react'
import * as styles from './TestElement.module.scss'

interface Props {
  children: React.ReactNode
}

export default function TestElement({ children }: Props) {
  return <div className={styles.testElement}>{children}</div>
}
