import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import UploadFileInput from '../UploadFileInput'
import { createMockFile } from './testHelpers'
import { UploadContextProps } from '../types'
import { UploadContext } from '../UploadContext'

const defaultProps: UploadContextProps = {
  acceptedFileTypes: ['png'],
  onInputUpload: jest.fn(),
  buttonText: 'upload button text',
  fileMaxSize: 1000,
  errorLargeFile: 'error message',
  errorUnsupportedFile: 'error message',
  filesAmountLimit: 2,
}

const makeWrapper = (props = null) => {
  const defaultContext: UploadContextProps = {
    ...defaultProps,
    ...props,
  }
  return ({ children }) => {
    return (
      <UploadContext.Provider value={defaultContext}>
        {children}
      </UploadContext.Provider>
    )
  }
}

describe('UploadFileInput', () => {
  it('renders the upload button', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper(),
    })
    expect(screen.getByRole('button')).not.toBeNull()
  })

  it('renders the upload button text', () => {
    const buttonText = 'button text'
    render(<UploadFileInput />, {
      wrapper: makeWrapper({
        buttonText: buttonText,
      }),
    })

    expect(screen.queryByText(buttonText)).toBeTruthy()
  })

  it('renders the upload input', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper(),
    })

    expect(
      document.querySelector('.dnb-upload__file-input')
    ).not.toBeNull()
  })

  it('accepts multiple files by default', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper(),
    })

    const element = document.querySelector('.dnb-upload__file-input')

    expect(element.hasAttribute('multiple')).toBeTruthy()
  })

  it('accepts ony one file when filesAmountLimit is 1', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper({
        filesAmountLimit: 1,
      }),
    })

    const element = document.querySelector('.dnb-upload__file-input')

    expect(element.hasAttribute('multiple')).toBeFalsy()
  })

  it('renders the input', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper(),
    })
    const element = document.querySelector('.dnb-upload__file-input')

    expect(element).not.toBeNull()
    expect(element.getAttribute('class')).toMatch('dnb-upload__file-input')
  })

  it('simulates a click on the input when clicking the button', () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper(),
    })

    const buttonElement = screen.getByRole('button')

    const inputElement = document.querySelector('.dnb-upload__file-input')

    const clickEventListener = jest.fn()
    inputElement.addEventListener('click', clickEventListener)

    fireEvent.click(buttonElement)

    expect(clickEventListener).toHaveBeenCalled()
  })

  it('calls the onInputUpload function', async () => {
    const file = createMockFile('fileName.png', 100, 'image/png')

    const onInputUpload = jest.fn()

    render(<UploadFileInput />, {
      wrapper: makeWrapper({ onInputUpload }),
    })

    const inputElement = document.querySelector('.dnb-upload__file-input')

    await waitFor(() =>
      fireEvent.change(inputElement, {
        target: { files: [file] },
      })
    )

    expect(onInputUpload).toHaveBeenCalledWith([{ file }])
  })

  it('will reset input value on click', async () => {
    const file = createMockFile('fileName.png', 100, 'image/png')

    const onInputUpload = jest.fn()

    render(<UploadFileInput />, {
      wrapper: makeWrapper({ onInputUpload }),
    })

    const inputElement = document.querySelector(
      '.dnb-upload__file-input'
    ) as HTMLInputElement

    Object.defineProperty(inputElement, 'value', {
      writable: true,
      value: 'mock-value',
    })

    expect(inputElement.value).toBe('mock-value')

    await waitFor(() => fireEvent.click(inputElement))

    expect(inputElement.value).toBe(null)

    await waitFor(() =>
      fireEvent.change(inputElement, {
        target: { files: [file] },
      })
    )
    expect(onInputUpload).toHaveBeenCalledWith([{ file }])
  })

  it('accepts given acceptedFileTypes', async () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper({
        acceptedFileTypes: ['png', 'pdf'],
      }),
    })

    const inputElement = document.querySelector(
      '.dnb-upload__file-input'
    ) as HTMLInputElement

    expect(inputElement.accept).toBe('.png,.pdf')
  })

  it('accepts jpeg when jpg is defined', async () => {
    render(<UploadFileInput />, {
      wrapper: makeWrapper({
        acceptedFileTypes: ['png', 'jpg'],
      }),
    })

    const inputElement = document.querySelector(
      '.dnb-upload__file-input'
    ) as HTMLInputElement

    expect(inputElement.accept).toBe('.png,.jpg,.jpeg')
  })

  it('can upload multiple files', async () => {
    const file1 = createMockFile('fileName1.png', 100, 'image/png')
    const file2 = createMockFile('fileName2.png', 100, 'image/png')

    const onInputUpload = jest.fn()

    render(<UploadFileInput />, {
      wrapper: makeWrapper({ onInputUpload }),
    })

    const inputElement = document.querySelector('.dnb-upload__file-input')

    await waitFor(() =>
      fireEvent.change(inputElement, {
        target: { files: [file1, file2] },
      })
    )

    expect(onInputUpload).toHaveBeenCalledWith([
      { file: file1 },
      { file: file2 },
    ])
  })
})
