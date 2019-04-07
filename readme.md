# sunlight-theme

[![CircleCI](https://circleci.com/gh/nvandoorn/sunlight-theme.svg?style=shield)](https://circleci.com/gh/nvandoorn/sunlight-theme)

A theme provider for `@emotion/core` and `emotion-theming` that supplies the level of sunlight with `use-sunlight`. Supports middleware via a prop.

## Demo

[https://optimistic-kalam-56c21b.netlify.com](https://optimistic-kalam-56c21b.netlify.com)

## Usage

```javascript
// src/demo-component.js

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
```
