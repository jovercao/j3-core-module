'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.download = undefined;

var _download = require('./download');

var _download2 = _interopRequireDefault(_download);

var _i18n = require('i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18n2.default.configure({
    locales: ['en-US', 'zh-CN', 'zh-TW'], // setup some locales - other locales default to en_US silently
    defaultLocale: 'zh-CN',
    directory: './lang', // i18n 翻译文件目录，我的是 i18n， 可以写成其他的。
    updateFiles: false,
    indent: "\t",
    extension: '.json' // 由于 JSON 不允许注释，所以用 js 会方便一点，也可以写成其他的，不过文件格式是 JSON
});

exports.download = _download2.default;
//# sourceMappingURL=index.js.map