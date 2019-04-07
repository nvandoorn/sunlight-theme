// In production, it's worth configuring things
// to handle the `css` prop at build time,
// but for now, we use the `jsx` callback
// provided from `@emotion/core`
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { SunlightTheme } from './sunlight-theme'
import { css } from '@emotion/core'
import colormap from 'colormap'

// define an array of 11 colours
const mainRange = colormap({
  colormap: 'autumn',
  nshades: 11,
  format: 'hex',
  alpha: 1
})

// define an emotion style
const containerStyle = ({ colours }) => css`
  color: ${colours.main};
`

// define a middleware function that translates
// the light level to a "theme" (some object
// that's useful for styles)
const colourMiddleware = theme => {
  return {
    ...theme,
    colours: {
      main: mainRange[theme.lightLevel]
    }
  }
}

export const DemoComponent = ({ children }) => {
  // middleware is optional but encouraged
  // for mapping light level to colours
  return (
    <SunlightTheme middleware={[colourMiddleware]}>
      <div css={containerStyle}>{children}</div>
    </SunlightTheme>
  )
}
