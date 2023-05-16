import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import {
  StepsLayout,
  StepsContext,
} from '@dnb/eufemia/src/extensions/deposit'

export const Default = () => {
  return (
    <ComponentBox scope={{ StepsLayout, StepsContext }}>
      <StepsContext.Provider
        value={{
          activeIndex: 0,
          errors: {},
          handlePrevious: () => null,
          handleNext: () => console.log('handleNext'),
        }}
      >
        <StepsLayout.NextButton />
      </StepsContext.Provider>
    </ComponentBox>
  )
}
