/* global it */
import React from 'react'
import { render } from 'enzyme'

import MyComponent from '../HeaderSmallText'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyComponent />, div)
})
