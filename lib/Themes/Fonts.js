'use strict';

exports.__esModule = true;
var type = exports.type = {
  base: 'Roboto',
  bold: 'Roboto-Bold',
  emphasis: 'Roboto-Italic'
};

var size = exports.size = {
  h1: '38px',
  h2: '34px',
  h3: '30px',
  h4: '26px',
  h5: '20px',
  h6: '19px',
  large: '18px',
  regular: '16px',
  medium: '14px',
  small: '12px',
  tiny: '8.5px'
};

var style = exports.style = {
  h1: {
    'font-weight': 'bold',
    'font-size': size.h1
  },
  h2: {
    'font-weight': 'bold',
    'font-size': size.h2
  },
  h3: {
    'font-family': type.emphasis,
    'font-size': size.h3
  },
  h4: {
    'font-family': type.base,
    'font-size': size.h4
  },
  h5: {
    'font-family': type.base,
    'font-size': size.h5
  },
  h6: {
    'font-family': type.emphasis,
    'font-size': size.h6
  },
  normal: {
    'font-family': type.base,
    'font-size': size.regular
  },
  description: {
    'font-family': type.base,
    'font-size': size.medium
  }
};

exports.default = {
  type: type,
  size: size,
  style: style
};