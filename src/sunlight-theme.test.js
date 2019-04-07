import { SunlightTheme } from './sunlight-theme'
import { render } from 'react-testing-library'
import React from 'react'

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
}

describe('SunlightTheme', () => {
  test('Invalid middleware', () => {
    const r = () => render(<SunlightTheme middleware={[5, 'yo']} />)
    expect(r).toThrow(Error)
  })
})
