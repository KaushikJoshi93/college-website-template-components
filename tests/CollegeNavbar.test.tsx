import * as React from 'react'
import { render } from '@testing-library/react'
import { CollegeNavbar } from '../src'

import 'jest-canvas-mock'

jest.mock('../src/components/CollegeNavbar/college_navbar.css', () => ({}))

// eslint-disable-next-line no-undef
describe('CollegeNavbar redering test', () => {
  // eslint-disable-next-line no-undef
  it('renders without crashing', () => {
    render(<CollegeNavbar bgHexColor='#ccc' items={[]} logoPath='src' />)
  })
})
