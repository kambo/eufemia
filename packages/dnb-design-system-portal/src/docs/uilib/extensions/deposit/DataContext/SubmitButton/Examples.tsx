import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import { DataContext } from '@dnb/eufemia/src/extensions/deposit'
import { defaultContextState } from '@dnb/eufemia/src/extensions/deposit/DataContext/Context'

export const Default = () => {
  return (
    <ComponentBox scope={{ DataContext, defaultContextState }}>
      <DataContext.Context.Provider
        value={{
          ...defaultContextState,
          handleSubmit: () => console.log('handleSubmit'),
        }}
      >
        <DataContext.SubmitButton />
      </DataContext.Context.Provider>
    </ComponentBox>
  )
}
