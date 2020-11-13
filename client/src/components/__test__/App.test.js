import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from '../../utils/test-utils'
import App from '../App'

it('Renders app without crashing', () => {
  render(<App />, { initialState: { stats: [{}] } })
})