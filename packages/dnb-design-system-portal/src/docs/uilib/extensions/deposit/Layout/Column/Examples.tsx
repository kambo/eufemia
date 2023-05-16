import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import { Layout } from '@dnb/eufemia/src/extensions/deposit'

export const Default = () => {
  return (
    <ComponentBox scope={{ Layout }}>
      <Layout.Column>
        <Layout.Card>Card contents</Layout.Card>
        <Layout.Card>Card contents</Layout.Card>
        <Layout.Card>Card contents</Layout.Card>
      </Layout.Column>
    </ComponentBox>
  )
}
