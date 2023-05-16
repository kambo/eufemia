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
          activeIndex: 5,
          errors: {},
          handlePrevious: () => console.log('handlePrevious'),
          handleNext: () => null,
        }}
      >
        <StepsLayout.PreviousButton />
      </StepsContext.Provider>
    </ComponentBox>
  )
}
