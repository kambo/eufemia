import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import {
  Layout,
  TestElement,
  DataInput,
} from '@dnb/eufemia/src/extensions/deposit'

export const Default = () => {
  return (
    <ComponentBox scope={{ Layout, TestElement, DataInput }}>
      <Layout.FlexItem>Contents</Layout.FlexItem>
    </ComponentBox>
  )
}
