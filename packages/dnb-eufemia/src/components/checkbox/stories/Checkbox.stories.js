/**
 * @dnb/eufemia Component Story
 *
 */

import React /* , { useState, useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { Wrapper, Box } from 'storybook-utils/helpers'
import styled from '@emotion/styled'

import { Checkbox, Button, FormLabel, FormRow } from '../../'

export default {
  title: 'Eufemia/Components/Checkbox',
}

const CustomRow = styled(FormRow)`
  > .dnb-form-label {
    color: blue;
  }
`

const CustomStyle = styled.div`
  /* empty */
`

export const CheckboxSandbox = () => (
  <CustomStyle>
    <Wrapper>
      <Box>
        <ControlledVsUncontrolled />
      </Box>
      <Box>
        <FormRow vertical disabled label="Without for_id (select me)">
          <Checkbox label="Checkbox" />
        </FormRow>
      </Box>
      <Box>
        <Checkbox label="Checkbox" />
      </Box>
      <Box>
        <p className="dnb-p">
          Text: <FormLabel for_id="checkbox">Unchecked:</FormLabel>
          <Checkbox id="checkbox" />
        </p>
      </Box>
      <Box>
        <p className="dnb-p">
          Text:{' '}
          <Checkbox
            label="Checked"
            checked
            on_change={({ checked }) => {
              console.log('on_change', checked)
            }}
          />
        </p>
      </Box>
      <Box>
        <CustomRow indent>
          <FormLabel for_id="checkbox-2">
            Vertical FormLabel for a Checkbox component Sapien rhoncus
            sagittis pharetra ornare platea feugiat cras senectus viverra:
          </FormLabel>
          <Checkbox
            id="checkbox-2"
            label="Unchecked"
            on_change={({ checked }) => {
              console.log('on_change', checked)
            }}
          />
        </CustomRow>
      </Box>
      <Box>
        <FormLabel for_id="checkbox-1" direction="vertical" vertical>
          Vertical FormLabel for a Checkbox component:
        </FormLabel>
        <Checkbox id="checkbox-1" label="Unchecked disabled" disabled />
      </Box>
      <Box>
        <Checkbox label="Checked disabled" checked disabled />
      </Box>
      <Box>
        <Checkbox
          label="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
          status="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
        />
      </Box>
      <Box>
        <Checkbox
          // label="Unchecked status error:"
          label="Unchecked:"
          label_position="left"
          // status="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
          status="Potenti viverra facilisi blandit sodales lorem est fusce"
          status_state="info"
        />
      </Box>
      <Box>
        <Checkbox
          // label="Unchecked status error:"
          label="Unchecked:"
          label_position="right"
          // status="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
          status="Potenti viverra facilisi blandit sodales lorem est fusce"
          status_state="info"
        />
      </Box>
      <Box>
        <Checkbox
          label="Checked status message"
          checked
          status="Potenti viverra ft quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
        />
      </Box>
    </Wrapper>
  </CustomStyle>
)

function ControlledVsUncontrolled() {
  const [checked, setChecked] = React.useState(false)
  const [random, setRandom] = React.useState()

  return (
    <>
      <Checkbox
        label="Checkbox 1"
        checked={checked}
        id="checkbox1"
        on_change={({ checked }) => {
          setChecked(checked)
        }}
      />
      <br />
      <Button on_click={() => setChecked(true)} text="Set checkbox true" />
      <Button
        on_click={() => setChecked(undefined)}
        text="Reset undefined"
      />
      <Button on_click={() => setChecked(null)} text="Reset null" />
      <Button on_click={() => setRandom(Math.random())} text="Rerender" />
      <br />
      <code>{JSON.stringify({ checked, random })}</code>
    </>
  )
}
