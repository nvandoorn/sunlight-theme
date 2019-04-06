# sunlight-theme

## Demo

[https://optimistic-kalam-56c21b.netlify.com](https://optimistic-kalam-56c21b.netlify.com)

## Usage

```javascript
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
```
