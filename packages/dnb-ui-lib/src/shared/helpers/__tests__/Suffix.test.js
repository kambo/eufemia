/**
 * Component Test
 *
 */

import React from 'react'
import { mount } from '../../../core/jest/jestSetup'
import Input from '../../../components/input/Input'
import Modal from '../../../components/modal/Modal'
import Context from '../../Context'

const Wrapper = ({ children }) => children(React.useContext(Context))

describe('Suffix context', () => {
  it('works as expeted with the Modal component', () => {
    const inputValue = 'Input Value'
    const inputLabel = 'Input Label'
    const modalContent = 'Modal Content'
    let more_info

    const Comp = mount(
      <Wrapper>
        {context => {
          more_info = context.translation.Modal.more_info
          return (
            <Input
              label={inputLabel}
              suffix={<Modal>{modalContent}</Modal>}
            >
              {inputValue}
            </Input>
          )
        }}
      </Wrapper>
    )

    expect(
      Comp.find('button.dnb-modal__trigger')
        .instance()
        .getAttribute('aria-label')
    ).toBe(more_info)
  })
})
