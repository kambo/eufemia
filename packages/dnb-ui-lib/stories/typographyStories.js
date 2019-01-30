/**
 * Storybook Story
 *
 */

import React from 'react'
import { Wrapper, Box } from './helpers'
import styled from '@emotion/styled'

const stories = []
export default stories

stories.push([
  'Headings',
  () => (
    <Wrapper className="dnb-style">
      <Box>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <p>
          Paragraph with Link <a href="https://dnb.no">Anchor</a> Posuere
          eget vestibulum nostra odio varius integer ullamcorper curabitur
          mi
        </p>
      </Box>
    </Wrapper>
  )
])

const Small = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    background-color: rgba(0, 200, 200, 0.25);
    * {
      background-color: rgba(255, 255, 122, 0.35);
    }
  }
  h1 ~ h1,
  h2 ~ h2,
  h3 ~ h3,
  h4 ~ h4,
  h5 ~ h5,
  h6 ~ h6 {
    background-color: rgba(213, 30, 149, 0.25);
    * {
      background-color: rgba(0, 200, 200, 1);
    }
  }
`
stories.push([
  'Small',
  () => (
    <Wrapper className="dnb-style">
      <Box>
        <Small>
          {/* p */}
          <p>
            Posuere eget vestibulum <small>Small Text</small> integer{' '}
            <a href="https://dnb.no">Normal Anchor</a>{' '}
            <a href="https://dnb.no">
              <small>Small Anchor</small>
            </a>{' '}
            curabitur mi
          </p>

          {/* h1 */}
          <hr />
          <h1>
            <small>Small H1</small> Normal H1
          </h1>
          <h1>
            <small>Small only H1</small>
          </h1>
          <h1 className="dnb-small">Small class H1</h1>

          {/* h2 */}
          <hr />
          <h2>
            Normal H2 <small>Small H2</small>
          </h2>
          <h2 className="dnb-small">Small class H2</h2>

          {/* h3 */}
          <hr />
          <h3>
            Normal H3 <small>Small H3</small>
          </h3>
          <h3 className="dnb-small">Small class H3</h3>

          {/* h4 */}
          <hr />
          <h4>
            Normal H4 <small>H4 Small</small>
          </h4>
          <h4>Normal H4</h4>

          {/* h5 */}
          <hr />
          <h5>
            Normal H5 <small>H5 Small</small>
          </h5>
          <h5>Normal H5</h5>

          {/* h6 */}
          <hr />
          <h6>
            Normal H6 <small>H6 Small</small>
          </h6>
          <h6>Normal H6</h6>
        </Small>
      </Box>
    </Wrapper>
  )
])

stories.push([
  'Headings outside of `dnb-style`',
  () => (
    <Wrapper>
      <Box>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <p>
          Paragraph with Link <a href="https://dnb.no">Anchor</a> Posuere
          eget vestibulum nostra odio varius integer ullamcorper curabitur
          mi
        </p>
      </Box>
    </Wrapper>
  )
])
