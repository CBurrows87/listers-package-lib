export const space = {
  auto: 'auto',
  none: '0',
  xxs: '0.188rem', // 3px
  xs: '0.375rem', // 6px
  sm: '0.75rem', // 12px
  nm: '1.5rem', // 24px
  md: '2.25rem', // 36px
  lg: '3rem', // 48px
  xl: '4.5rem', // 72px
  xxl: '6rem', // 96px
  xxxl: '7.5rem' // 120px
}

export function spacingOptions() {
  const options = Object.keys(space)
  const labels = Object.entries(space).reduce((acc, [key, value]) => {
    acc[key] = `${key} (${value})`
    return acc
  }, {})

  return { options, labels }
}

export type Space = typeof space
