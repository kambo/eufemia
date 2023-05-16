import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import {
  DataContext,
  Layout,
  DataInput,
  DataValue,
} from '@dnb/eufemia/src/extensions/deposit'
import { testdata, TestdataSchema } from '../../testdata'

export const Default = () => {
  return (
    <ComponentBox
      scope={{
        DataContext,
        Layout,
        DataInput,
        DataValue,
        testdata,
        TestdataSchema,
      }}
    >
      <DataContext.Provider
        data={testdata}
        // schema={TestdataSchema}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
        onSubmitRequest={() => console.log('onSubmitRequest')}
      >
        <Layout.Section>
          <Layout.Card>
            <Layout.Column divider="line" spacing="small">
              <DataInput.String
                path="/requiredString"
                label="Required string"
                required
              />
              <DataInput.String path="/hmm" label="Invalid path" />
              <DataInput.String path="/string" label="String value" />
              <DataInput.String
                path="/string"
                label="String value (copy)"
              />
              <DataInput.Number path="/number" label="Number value" />
              <DataInput.String
                path="/number"
                label="Number with StringInput"
              />
              <DataInput.Boolean
                path="/boolean"
                label="Boolean - Checkbox"
                variant="checkbox"
              />
              <DataInput.Boolean
                path="/boolean"
                label="Boolean - Toggle"
                variant="toggle-button"
              />
              <div>
                <DataInput.String
                  path="/nested/nestedText"
                  label="Nested text"
                />
                <DataInput.Number
                  path="/nested/nestedNumber"
                  label="Nested number (minimum 50)"
                  minimum={50}
                />
              </div>
              <div className="hmm">
                <Layout.Row>
                  <DataInput.String
                    path="/list/0/itemText"
                    label="Item text"
                  />
                  <DataInput.Number
                    path="/list/0/itemNumber"
                    label="Item number"
                  />
                </Layout.Row>
                <Layout.Row>
                  <DataInput.String
                    path="/list/1/itemText"
                    label="Item text"
                  />
                  <DataInput.Number
                    path="/list/1/itemNumber"
                    label="Item number"
                  />
                </Layout.Row>
              </div>
              <Layout.ButtonRow>
                <DataContext.SubmitButton />
              </Layout.ButtonRow>
            </Layout.Column>
          </Layout.Card>
        </Layout.Section>
      </DataContext.Provider>
    </ComponentBox>
  )
}

export const ValidationWithJsonSchema = () => {
  return (
    <ComponentBox
      scope={{
        DataContext,
        Layout,
        DataInput,
        DataValue,
        testdata,
        TestdataSchema,
      }}
    >
      <DataContext.Provider
        data={testdata}
        schema={TestdataSchema}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
        onSubmitRequest={() => console.log('onSubmitRequest')}
      >
        <Layout.Section>
          <Layout.Card>
            <Layout.Column divider="line" spacing="small">
              <DataInput.String
                path="/requiredString"
                label="Required string"
              />
              <DataInput.String path="/hmm" label="Invalid path" />
              <DataInput.String path="/string" label="String value" />
              <DataInput.String
                path="/string"
                label="String value (copy)"
              />
              <DataInput.Number path="/number" label="Number value" />
              <DataInput.String
                path="/number"
                label="Number with StringInput"
              />
              <DataInput.Boolean
                path="/boolean"
                label="Boolean - Checkbox"
                variant="checkbox"
              />
              <DataInput.Boolean
                path="/boolean"
                label="Boolean - Toggle"
                variant="toggle-button"
              />
              <div>
                <DataInput.String
                  path="/nested/nestedText"
                  label="Nested text"
                />
                <DataInput.Number
                  path="/nested/nestedNumber"
                  label="Nested number"
                />
              </div>
              <div className="hmm">
                <Layout.Row>
                  <DataInput.String
                    path="/list/0/itemText"
                    label="Item text"
                  />
                  <DataInput.Number
                    path="/list/0/itemNumber"
                    label="Item number"
                  />
                </Layout.Row>
                <Layout.Row>
                  <DataInput.String
                    path="/list/1/itemText"
                    label="Item text"
                  />
                  <DataInput.Number
                    path="/list/1/itemNumber"
                    label="Item number"
                  />
                </Layout.Row>
              </div>
              <Layout.ButtonRow>
                <DataContext.SubmitButton />
              </Layout.ButtonRow>
            </Layout.Column>
          </Layout.Card>
        </Layout.Section>
      </DataContext.Provider>
    </ComponentBox>
  )
}
