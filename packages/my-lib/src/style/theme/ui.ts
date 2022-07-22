import { space } from './spacing'

export const global = {
  // Containers
  maxWidth: '92.25rem', // 1476px
  contentWidth: 'calc( var(--global-max-width) - var(--gutter-desktop) * 2)', // Double check when using

  // Font
  baseline: '0.375rem',
  fontSize: '1rem',
  lineHeight: '1.5'
}

export const gutter = {
  mobile: space.nm, // 24px
  tablet: space.lg, // 48px
  desktop: space.xl // 72px
}

// ZIndex
export const z = {
  header: 9010,
  modal: 9020,
  overlay: 8000,
  dropdown: 7000,
  persistent: 6000,
  priority: 5000,
  layer1: '1',
  layer2: '2',
  layer3: '3',
  layer4: '4',
  layer5: '5'
}
