// Families
export const type = {
  body: `"Web Open Sans", -apple-system, system-ui, Helvetica, Arial, sans-serif`,
  headings: `"Web Gotham", -apple-system, system-ui, Helvetica, Arial, sans-serif`,
  actions: `"Web Gotham", -apple-system, system-ui, Helvetica, Arial, sans-serif`,
  mono: `"Fira Sans", Consolas, "Lucida Console", Courier, "Courier New", monospace`,
  script: `PT Serif, Georgia, serif`
}

// Font Sizes
export const size = {
  // Display
  tera: '3.5rem', // 56px
  giga: '3.25rem', // 52px
  mega: '3rem', // 48px
  kilo: '2.65rem', // 42px

  // Headings
  alpha: '2.375rem', // 38px
  beta: '2rem', // 32px
  gamma: '1.75rem', // 28px
  delta: '1.5rem', // 24px
  epsilon: '1.3125rem', // 21px
  zeta: '1.125rem', // 18px

  // Small
  sm: '0.875rem', // 14px
  xs: '0.75rem', // 12px
  ty: '0.625rem' // 10px
}

// Line Heights
export const lineHeight = {
  alpha: 1.1052631579,
  beta: 1.125,
  gamma: 1.0714285714,
  delta: 1,
  epsilon: 1.1428571429,
  zeta: 1.333333333
}

export const typography = { type, size, lineHeight }
export type Typography = typeof typography

export function fontSizesOptions() {
  const options = Object.keys(typography.size)
  const labels = Object.entries(typography.size).reduce((acc, [key, value]) => {
    acc[key] = `${key} (${value})`
    return acc
  }, {})

  return { options, labels }
}
