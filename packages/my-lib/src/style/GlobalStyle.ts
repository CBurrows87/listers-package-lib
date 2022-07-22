import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import {
  AppTheme,
  color,
  radius,
  motion,
  space,
  global,
  z,
  size,
  lineHeight,
  gutter,
  type
} from './constants'
import {
  SPACES,
  MOTION,
  COLORS,
  RADIUS,
  SIZES,
  TYPES,
  LINEHEIGHTS
} from './variables'

import { createTheme } from '../utils/'

import { GLOBAL, GUTTERS, ZINDEX } from './variables/UI'

export const Themes = createTheme({
  color,
  radius,
  motion,
  global,
  space,
  z,
  size,
  type,
  lineHeight,
  gutter
})

type Props = {
  theme: AppTheme
}

export const GlobalStyles = createGlobalStyle<Props>`
${normalize}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    ${COLORS};
    ${MOTION};
    ${SIZES}
    ${SPACES};
    ${RADIUS};
    ${TYPES};
    ${LINEHEIGHTS};
    ${GUTTERS};
    ${GLOBAL};
    ${ZINDEX};
  }

  html {
    position: relative;
    overflow-y: scroll;
    min-height: 100vh;
    font-family: ${Themes.type.body};
    font-size: ${Themes.global.fontSize};
    line-height: ${Themes.global.lineHeight};
    color: ${Themes.color.bodyText};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     text-rendering: optimizeLegibility;
    background-color: ${Themes.color.bodyBg};
    transition: ${Themes.motion.transition};
  }

  body{
  min-height: 100vh;
  overflow: hidden;
  }

  fieldset {
  border: 1px solid ${Themes.color.ui300};
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

`
