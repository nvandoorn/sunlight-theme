// In production, it's worth configuring things
// to handle the `css` prop at build time
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { SunlightTheme } from './sunlight-theme'
import { css } from '@emotion/core'
import colormap from 'colormap'

const containerStyle = ({ colours }) => css`
  color: ${colours.main};
`

const mainRange = colormap({
  colormap: 'autumn',
  nshades: 11,
  format: 'hex',
  alpha: 1
})

const colourMiddleware = theme => {
  return {
    ...theme,
    colours: {
      main: mainRange[theme.lightLevel]
    }
  }
}

export const DemoComponent = ({ children }) => {
  return (
    <SunlightTheme middleware={[colourMiddleware]}>
      <div css={containerStyle}>{children}</div>
    </SunlightTheme>
  )
}
