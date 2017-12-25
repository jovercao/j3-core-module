'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    node_path: 'node',
    // win32平台下npm路径为npm.cmd
    npm_path: process.platform == 'win32' ? 'npm.cmd' : 'npm',
    modules_path: _path2.default.join(process.cwd(), 'j3_modules')
}; /* 配置文件 */
//# sourceMappingURL=config.js.map