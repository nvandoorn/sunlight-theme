import React from 'react'
import { useSunlight } from 'use-sunlight'
import { ThemeProvider } from 'emotion-theming'

const notFn = t => typeof t !== 'function'

const pipeReducer = (a, b) => arg => b(a(arg))

const pipe = (...fns) => {
  if (fns.some(notFn)) throw new Error('All middleware must be a function')
  return fns.reduce(pipeReducer, k => k)
}

export const SunlightTheme = ({ children, middleware }) => {
  const [lightLevel] = useSunlight()
  const theme = { lightLevel }
  // if we have at least one middleware function,
  // apply them in a pipe (left to right)
  const transformedTheme =
    middleware && middleware.length ? pipe(...middleware)(theme) : theme
  return <ThemeProvider theme={transformedTheme}>{children}</ThemeProvider>
}
