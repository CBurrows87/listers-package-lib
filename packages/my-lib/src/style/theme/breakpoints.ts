export const bp = {
  xs: '376px',
  sm: '582px',
  md: '768px',
  lg: '1025px',
  xl: '1256px',
  xxl: '1480px'
}
export interface ResponsiveProps {
  breakpoint1: string
  breakpoint2: string
  mediaType?: 'screen' | 'print' | 'all' | ''
  orientation?: 'landscape' | 'portrait' | ''
  hover?: 'hover' | ''
  pointer?: 'pointer' | ''
  retina?: 'retina2x' | 'retina3x' | ''
}

export const upto = (
  breakpoint1: string,
  mediaType?: 'screen' | 'print' | 'all' | '',
  orientation?: 'landscape' | 'portrait' | '',
  hover?: 'hover' | '',
  pointer?: 'pointer' | '',
  retina?: 'retina2x' | 'retina3x' | ''
) =>
  `
  ${mediaType || 'screen'} and (max-width:${breakpoint1})
  ${(orientation && `and (orientation: ${orientation})`) || ''} 
  ${(hover && `and (any-hover: hover)`) || ''}
  ${(pointer && `and (any-pointer: fine)`) || ''}
  ${
    (retina &&
      retina === 'retina2x' &&
      `and (-webkit-min-device-pixel-ratio: 2)', '(min-resolution: 192dpi) `) ??
    ((retina === 'retina3x' &&
      `'and (-webkit-min-device-pixel-ratio: 3)', '(min-resolution: 350dpi) '`) ||
      '')
  } 
  `
export const from = (
  breakpoint1: string,
  mediaType?: 'screen' | 'print' | 'all' | '',
  orientation?: 'landscape' | 'portrait' | '',
  hover?: 'hover' | '',
  pointer?: 'pointer' | '',
  retina?: 'retina2x' | 'retina3x' | ''
) =>
  `
  ${mediaType || 'screen'} and (min-width:${breakpoint1})
  ${(orientation && `and (orientation: ${orientation})`) || ''} 
  ${(hover && `and (any-hover: hover)`) || ''}
  ${(pointer && `and (any-pointer: fine)`) || ''}
  ${
    (retina &&
      retina === 'retina2x' &&
      `and (-webkit-min-device-pixel-ratio: 2)', '(min-resolution: 192dpi) `) ??
    ((retina === 'retina3x' &&
      `'and (-webkit-min-device-pixel-ratio: 3)', '(min-resolution: 350dpi) '`) ||
      '')
  } 
  `

export const only = (
  breakpoint1: string,
  breakpoint2: string,
  mediaType?: 'screen' | 'print' | 'all' | '',
  orientation?: 'landscape' | 'portrait' | '',
  hover?: 'hover' | '',
  pointer?: 'pointer' | '',
  retina?: 'retina2x' | 'retina3x' | ''
) =>
  `
  ${
    mediaType || 'screen'
  } and (min-width:${breakpoint1}) and (max-width:${breakpoint2}) 
  ${(orientation && `and (orientation: ${orientation})`) || ''} 
  ${(hover && `and (any-hover: hover)`) || ''}
  ${(pointer && `and (any-pointer: fine)`) || ''}
  ${
    (retina &&
      retina === 'retina2x' &&
      `and (-webkit-min-device-pixel-ratio: 2)', '(min-resolution: 192dpi) `) ??
    ((retina === 'retina3x' &&
      `'and (-webkit-min-device-pixel-ratio: 3)', '(min-resolution: 350dpi) '`) ||
      '')
  } 
  `
