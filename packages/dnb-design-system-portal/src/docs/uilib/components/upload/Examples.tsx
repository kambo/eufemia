/**
 * UI lib Component Example
 *
 */

import React from 'react'
import ComponentBox from 'dnb-design-system-portal/src/shared/tags/ComponentBox'
import { Button, ToggleButton, Img, Section } from '@dnb/eufemia/src'
import Upload from '@dnb/eufemia/src/components/upload/Upload'

const createMockFile = (name: string, size: number, type: string) => {
  const file = new File([], name, { type })
  Object.defineProperty(file, 'size', {
    get() {
      return size
    },
  })
  return file
}

const useMockFiles = (setFiles, extend) => {
  React.useEffect(() => {
    setFiles([
      {
        file: createMockFile('fileName.png', 123, 'image/png'),
        ...extend,
      },
    ])
  }, [])
}

export const UploadPrefilledFileList = () => (
  <ComponentBox
    data-visual-test="upload-file-list"
    scope={{ useMockFiles }}
  >
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload('file-list')
        console.log('files', files)

        useMockFiles(setFiles, { errorMessage: 'This is no real file!' })

        return <Upload acceptedFileTypes={['jpg', 'png']} id="file-list" />
      }

      return <Component />
    }}
  </ComponentBox>
)

export const UploadBasic = () => (
  <ComponentBox data-visual-test="upload-basic">
    <Upload acceptedFileTypes={['jpg', 'png']} id="upload-basic" />
  </ComponentBox>
)

export const UploadSingleFile = () => (
  <ComponentBox>
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload('upload-single-file')
        console.log('files', files, setFiles)

        return (
          <Upload
            acceptedFileTypes={['jpg', 'png']}
            id="upload-single-file"
            filesAmountLimit={1}
          />
        )
      }

      return <Component />
    }}
  </ComponentBox>
)

export const UploadRemoveFile = () => (
  <ComponentBox data-visual-test="upload-remove-files">
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload('upload-remove-files')

        return (
          <>
            <Upload
              acceptedFileTypes={['jpg', 'png']}
              id="upload-remove-files"
            />

            <Button
              top="small"
              disabled={files.length < 1}
              onClick={() => setFiles([])}
            >
              Remove selected files
            </Button>

            <Preview files={files} />
          </>
        )

        function Preview({ files }) {
          const [images, setImages] = React.useState([])

          React.useEffect(() => {
            files.map(({ file }) => {
              let reader = new FileReader()

              reader.addEventListener(
                'load',
                (event) => {
                  images.push({ blob: event.target, file })
                  setImages([...images])
                  reader = null
                },
                false
              )

              reader.readAsDataURL(file)
            })
          }, [files])

          return (
            <Section aira-label="List of choosen images">
              {images.map((img, i) => (
                <Img
                  top
                  key={i}
                  src={img.blob.result}
                  alt={img.file.name}
                  height={100}
                />
              ))}
            </Section>
          )
        }
      }

      return <Component />
    }}
  </ComponentBox>
)

export const UploadIsLoading = () => (
  <ComponentBox
    scope={{ useMockFiles }}
    data-visual-test="upload-is-loading"
  >
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload('upload-is-loading')

        useMockFiles(setFiles, { isLoading: true })

        return (
          <>
            <Upload
              acceptedFileTypes={['jpg', 'png']}
              id="upload-is-loading"
            />
            <ToggleButton
              top="small"
              disabled={files.length < 1}
              on_change={({ checked }) =>
                setFiles(
                  files.map((fileItem) => {
                    return { ...fileItem, isLoading: checked }
                  })
                )
              }
            >
              Files is loading toggle
            </ToggleButton>
          </>
        )
      }

      return <Component />
    }}
  </ComponentBox>
)

export const UploadErrorMessage = () => (
  <ComponentBox data-visual-test="upload-error-message">
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload(
          'upload-error-message'
        )

        return (
          <>
            <Upload
              acceptedFileTypes={['jpg', 'png']}
              id="upload-error-message"
            />
            <ToggleButton
              top="small"
              disabled={files.length < 1}
              onChange={({ checked }) => {
                setFiles(
                  files.map((fileItem) => {
                    return {
                      ...fileItem,
                      errorMessage: checked
                        ? 'custom error message'
                        : null,
                    }
                  })
                )
              }}
            >
              Toggle error message
            </ToggleButton>
          </>
        )
      }

      return <Component />
    }}
  </ComponentBox>
)

export const UploadAcceptedFormats = () => (
  <ComponentBox>
    {() => {
      const Component = () => {
        const { files, setFiles } = Upload.useUpload(
          'upload-accepted-formats'
        )
        console.log('files', files, setFiles)

        return (
          <Upload
            acceptedFileTypes={['png', 'jpg', 'pdf']}
            id="upload-accepted-formats"
          />
        )
      }

      return <Component />
    }}
  </ComponentBox>
)
