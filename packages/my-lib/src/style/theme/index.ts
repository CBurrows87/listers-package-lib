import { color } from './color'
import { space } from './spacing'
import { typography } from './typography'
import { radius } from './radius'

import { motion } from './motion'
import { global, gutter, z } from './ui'

export const defaultTheme = {
  breakpoints: ['376px', '582px', '768px', '1025px', '1256px', '1480px'],
  fontSizes: typography.size,
  fonts: typography.type,
  lineHeights: typography.lineHeight,
  colors: color,
  space,
  radii: radius,
  motion,
  z,
  global,
  gutter
}

export type AppTheme = typeof defaultTheme

export * from './color'
export * from './motion'
export * from './radius'
export * from './spacing'
export * from './typography'
export * from './ui'
export * from './breakpoints'
