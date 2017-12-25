'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.npmView = exports.npmInstall = exports.valid = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// 验证模块是否符合需求
let valid = exports.valid = (() => {
    var _ref2 = (0, _asyncToGenerator3.default)(function* (name, stdout, stderr) {
        let json = yield npmView(name, function (data) {
            console.info(data);
        }, function (data) {
            console.error(data);
        });
        let pkg = eval('(' + json + ')');
        if (!pkg.j3Config) {
            return false;
        }
        return true;
    });

    return function valid(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
})();

// 执行一个进程，并提供输入及输出。


let npmInstall = exports.npmInstall = (() => {
    var _ref3 = (0, _asyncToGenerator3.default)(function* (name, stdout, stderr) {
        try {
            yield run(_config2.default.npm_path, ['install', name], {
                cwd: _config2.default.modules_path
            }, stdout, stderr);
        } catch (err) {
            throw err;
        }
    });

    return function npmInstall(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
})();

let npmView = exports.npmView = (() => {
    var _ref4 = (0, _asyncToGenerator3.default)(function* (name, stdout, stderr) {
        try {
            return yield run(_config2.default.npm_path, ['view', name], undefined, stdout, stderr);
        } catch (err) {
            throw err;
        }
    });

    return function npmView(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
    };
})();

var _child_process = require('child_process');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _i18n = require('i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 下载前进行验证，如果确实是j3模块，则下载
exports.default = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* (name, stdout, stderr) {
        if (!(yield valid(name, stdout, stderr))) {
            console.log(_i18n2.default.__('not_j3_module'));
            return;
        }
        yield npmInstall(name, stdout, stderr);
    });

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})(); /*
          用于模块文件及依赖自动下载，使用npm完成，吴丹妮
      */

function run(cmd, args, options, stdout, stderr) {
    return new _promise2.default((resolve, reject) => {
        let ls = (0, _child_process.spawn)(cmd, args, options);

        let err = '',
            info = '';
        ls.stdout.on('data', data => {
            let str = data.toString();
            info += str;
            stdout(str);
        });

        ls.stderr.on('data', data => {
            let str = data.toString();
            err += str;
            stderr(str);
        });

        ls.on('exit', () => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}
//# sourceMappingURL=download.js.map