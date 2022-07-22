import { global, space, z } from '../constants'

export const GLOBAL = {
  '--global-max-width': global.maxWidth,
  '--global-content-width': global.contentWidth,
  '--global-baseline': global.baseline,
  '--global-font-size': global.fontSize,
  '--global-line-height': global.lineHeight
}

export const GUTTERS = {
  '--gutter-mobile': space.nm,
  '--gutter-tablet': space.lg,
  '--gutter-desktop': space.xl
}

export const ZINDEX = {
  '--z-header': z.header,
  '--z-modal': z.modal,
  '--z-overlay': z.overlay,
  '--z-dropdown': z.dropdown,
  '--z-persistent': z.persistent,
  '--z-priority': z.priority,
  '--z-layer1': z.layer1,
  '--z-layer2': z.layer2,
  '--z-layer3': z.layer3,
  '--z-layer4': z.layer4,
  '--z-layer5': z.layer5
}
