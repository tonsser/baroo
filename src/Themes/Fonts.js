export const type = {
  base: 'Roboto',
  bold: 'Roboto-Bold',
  emphasis: 'Roboto-Italic',
};

export const size = {
  h1: '38px',
  h2: '34px',
  h3: '30px',
  h4: '26px',
  h5: '20px',
  h6: '19px',
  input: '18px',
  regular: '16px',
  medium: '14px',
  small: '12px',
  tiny: '8.5px',
};

export const style = {
  h1: {
    'font-weight': 'bold',
    'font-size': size.h1,
  },
  h2: {
    'font-weight': 'bold',
    'font-size': size.h2,
  },
  h3: {
    'font-family': type.emphasis,
    'font-size': size.h3,
  },
  h4: {
    'font-family': type.base,
    'font-size': size.h4,
  },
  h5: {
    'font-family': type.base,
    'font-size': size.h5,
  },
  h6: {
    'font-family': type.emphasis,
    'font-size': size.h6,
  },
  normal: {
    'font-family': type.base,
    'font-size': size.regular,
  },
  description: {
    'font-family': type.base,
    'font-size': size.medium,
  },
};

export default {
  type,
  size,
  style,
};
