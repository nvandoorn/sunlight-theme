import React from 'react'
import { useSunlight } from 'use-sunlight'
import { ThemeProvider } from 'emotion-theming'

const isFn = t => typeof t === 'function'

const pipeReducer = (a, b) => arg => {
  if (!isFn(a) || !isFn(b)) throw new Error('Middleware has to be function')
  return b(a(arg))
}
const pipe = (...ops) => ops.reduce(pipeReducer)

export const SunlightTheme = ({ children, middleware }) => {
  const [lightLevel] = useSunlight()
  const theme = { lightLevel }
  // if we have at least one middleware function,
  // them in a pipe (left to right),
  const transformedTheme =
    middleware && middleware.length ? pipe(...middleware)(theme) : theme
  return <ThemeProvider theme={transformedTheme}>{children}</ThemeProvider>
}
