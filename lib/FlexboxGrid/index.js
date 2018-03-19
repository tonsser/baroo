'use strict';

exports.__esModule = true;
exports.Div = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n', '\n\n', '\n\n', '\n\n'], ['\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n', '\n\n', '\n\n', '\n\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n\n'], ['\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n'], ['\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n', '\n'], ['\n', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Media = require('../Themes/Media');

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var colCommon = '\npadding-left: 15px;\npadding-right: 15px;\nwidth: 100%;\nposition: relative;\nmin-height: 1px;\n';

var colSize = function colSize(size) {
  if (Number.isInteger(size) && size >= 1 && size <= 12) {
    return '\n    -ms-flex: 0 0 ' + 100 * size / 12 + '%;\n    flex: 0 0 ' + 100 * size / 12 + '%;\n    max-width: ' + 100 * size / 12 + '%;\n    ';
  }
  return '\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;';
};

var colOffset = function colOffset(size) {
  return Number.isInteger(size) && size >= 1 && size <= 12 && '\nmargin-left: ' + 100 * size / 12 + '%;\n';
};

var startCol = '\n-webkit-box-pack: start;\n-ms-flex-pack: start;\njustify-content: flex-start;\ntext-align: start;\n';
var centerCol = '\n-webkit-box-pack: center;\n-ms-flex-pack: center;\njustify-content: center;\ntext-align: center;\n';
var endCol = '\n-webkit-box-pack: end;\n-ms-flex-pack: end;\njustify-content: flex-end;\ntext-align: end;\n';

var topCol = '\n-webkit-box-align: start;\n-ms-flex-align: start;\nalign-items: flex-start;\n';
var middleCol = '\n-webkit-box-align: center;\n-ms-flex-align: center;\nalign-items: center;\n';
var bottomCol = '\n-webkit-box-align: end;\n-ms-flex-align: end;\nalign-items: flex-end;\n';
var aroundCol = '\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n';

var betweenCol = '\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  ';
var firstCol = '\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n  ';
var lastCol = '\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n';

var dNone = '\n  display: none !important;\n';

var dInline = '\n  display: inline !important;\n';

var dInlineBlock = '\n  display: inline-block !important;\n';

var dBlock = '\n  display: block !important;\n';

var dTable = '\n  display: table !important;\n';

var dTableRow = '\n  display: table-row !important;\n';

var dTableCell = '\n  display: table-cell !important;\n';

var dFlex = '\n  display: flex !important;\n';

var dInlineFlex = '\n  display: inline-flex !important;\n';

var flexboxgrid = function flexboxgrid(props) {
  return (0, _styledComponents.css)(_templateObject, (props.container || props.containerFluid) && '\nmargin-right: auto;\nmargin-left: auto;\nwidth: 100%;\npadding-right: 15px;\npadding-left: 15px;\n', props.row && '\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n', props.row && props.reverse && '\n-webkit-box-orient: horizontal;\n-webkit-box-direction: reverse;\n-ms-flex-direction: row-reverse;\nflex-direction: row-reverse;\n', props.row && props.noGutters && '\n  margin-left: 0;\n  margin-right: 0;\n  > div {\n    padding-left: 0;\n    padding-right: 0;\n  }\n', (props.colXs || props.colXsOffset) && colCommon, props.colXs && colSize(props.colXs), props.colXsOffset && colOffset(props.colXsOffset), props.startXs && startCol, props.centerXs && centerCol, props.endXs && endCol, props.topXs && topCol, props.middleXs && middleCol, props.bottomXs && bottomCol, props.aroundXs && aroundCol, props.betweenXs && betweenCol, props.firstXs && firstCol, props.lastXs && lastCol, (props.dNone || props.dNoneXs) && dNone, (props.dBlock || props.dBlockXs) && dBlock, (props.dInlineBlock || props.dInlineBlockXs) && dInlineBlock, (props.dInline || props.dInlineXs) && dInline, (props.dTable || props.dTableXs) && dTable, (props.dTableRow || props.dTableRowXs) && dTableRow, (props.dTableCell || props.dTableCellXs) && dTableCell, (props.dFlex || props.dFlexXs) && dFlex, (props.dInlineFlex || props.dInlineFlexXs) && dInlineFlex, _Media2.default.sm(_templateObject2, props.container && 'max-width: 720px;', (props.colSm || props.colSmOffset) && colCommon, props.colSm && colSize(props.colSm), props.colSmOffset && colOffset(props.colSmOffset), props.startSm && startCol, props.centerSm && centerCol, props.endSm && endCol, props.topSm && topCol, props.middleSm && middleCol, props.bottomSm && bottomCol, props.aroundSm && aroundCol, props.betweenSm && betweenCol, props.firstSm && firstCol, props.lastSm && lastCol, props.dNoneSm && dNone, props.dBlockSm && dBlock, props.dInlineBlockSm && dInlineBlock, props.dInlineSm && dInline, props.dTableSm && dTable, props.dTableRowSm && dTableRow, props.dTableCellSm && dTableCell, props.dFlexSm && dFlex, props.dInlineFlexSm && dInlineFlex), _Media2.default.md(_templateObject3, props.container && 'max-width: 960px;', (props.colMd || props.colMdOffset) && colCommon, props.colMd && colSize(props.colMd), props.colMdOffset && colOffset(props.colMdOffset), props.startMd && startCol, props.centerMd && centerCol, props.endMd && endCol, props.topMd && topCol, props.middleMd && middleCol, props.bottomMd && bottomCol, props.aroundMd && aroundCol, props.betweenMd && betweenCol, props.firstMd && firstCol, props.lastMd && lastCol, props.dNoneMd && dNone, props.dBlockMd && dBlock, props.dInlineBlockMd && dInlineBlock, props.dInlineMd && dInline, props.dTableMd && dTable, props.dTableRowMd && dTableRow, props.dTableCellMd && dTableCell, props.dFlexMd && dFlex, props.dInlineFlexMd && dInlineFlex), _Media2.default.lg(_templateObject3, props.container && 'max-width: 1140px;', (props.colLg || props.colLgOffset) && colCommon, props.colLg && colSize(props.colLg), props.colLgOffset && colOffset(props.colLgOffset), props.startLg && startCol, props.centerLg && centerCol, props.endLg && endCol, props.topLg && topCol, props.middleLg && middleCol, props.bottomLg && bottomCol, props.aroundLg && aroundCol, props.betweenLg && betweenCol, props.firstLg && firstCol, props.lastLg && lastCol, props.dNoneLg && dNone, props.dBlockLg && dBlock, props.dInlineBlockLg && dInlineBlock, props.dInlineLg && dInline, props.dTableLg && dTable, props.dTableRowLg && dTableRow, props.dTableCellLg && dTableCell, props.dFlexLg && dFlex, props.dInlineFlexLg && dInlineFlex));
};
var Div = exports.Div = _styledComponents2.default.div(_templateObject4, flexboxgrid);
exports.default = Div;