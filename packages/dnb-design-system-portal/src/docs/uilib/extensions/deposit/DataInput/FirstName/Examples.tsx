import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import { DataInput } from '@dnb/eufemia/src/extensions/deposit'

export const Empty = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        onChange={(value) => console.log('onChange', value)}
      />
    </ComponentBox>
  )
}

export const Placeholder = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        placeholder="Enter email address..."
        onChange={(value) => console.log('onChange', value)}
      />
    </ComponentBox>
  )
}

export const Label = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        label="Label text"
        onChange={(value) => console.log('onChange', value)}
      />
    </ComponentBox>
  )
}

export const LabelAndValue = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        label="Label text"
        value="John"
        onChange={(value) => console.log('onChange', value)}
      />
    </ComponentBox>
  )
}

export const Disabled = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        value="John"
        label="Label text"
        onChange={(value) => console.log('onChange', value)}
        disabled
      />
    </ComponentBox>
  )
}

export const Error = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        value="Unnamed"
        label="Label text"
        onChange={(value) => console.log('onChange', value)}
        error={new Error('This is what is wrong...')}
      />
    </ComponentBox>
  )
}

export const ValidationRequired = () => {
  return (
    <ComponentBox scope={{ DataInput }}>
      <DataInput.FirstName
        value="John"
        label="Label text"
        onChange={(value) => console.log('onChange', value)}
        required
      />
    </ComponentBox>
  )
}
