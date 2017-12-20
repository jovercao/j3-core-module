'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.npmView = exports.npmInstall = exports.valid = undefined;

// 验证模块是否符合需求
var valid = exports.valid = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, stdout, stderr) {
        var json, pkg;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return npmView(name, function (data) {
                            console.info(data);
                        }, function (data) {
                            console.error(data);
                        });

                    case 2:
                        json = _context2.sent;
                        pkg = JSON.parse(json);

                        if (pkg.j3Config) {
                            _context2.next = 6;
                            break;
                        }

                        return _context2.abrupt('return', false);

                    case 6:
                        return _context2.abrupt('return', true);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function valid(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}();

// 执行一个进程，并提供输入及输出。


var npmInstall = exports.npmInstall = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name, stdout, stderr) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return run(_config2.default.npm_default_path, ['install', name], undefined, stdout, stderr);

                    case 3:
                        _context3.next = 8;
                        break;

                    case 5:
                        _context3.prev = 5;
                        _context3.t0 = _context3['catch'](0);
                        throw _context3.t0;

                    case 8:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 5]]);
    }));

    return function npmInstall(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
}();

var npmView = exports.npmView = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, stdout, stderr) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return run(_config2.default.npm_default_path, ['view', name], undefined, stdout, stderr);

                    case 3:
                        return _context4.abrupt('return', _context4.sent);

                    case 6:
                        _context4.prev = 6;
                        _context4.t0 = _context4['catch'](0);
                        throw _context4.t0;

                    case 9:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 6]]);
    }));

    return function npmView(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
    };
}();

var _child_process = require('child_process');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               用于模块文件及依赖自动下载，使用npm完成，吴丹妮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */

// 下载前进行验证，如果确实是j3模块，则下载
exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, stdout, stderr) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return valid(name, stdout, stderr);

                    case 2:
                        if (_context.sent) {
                            _context.next = 4;
                            break;
                        }

                        console.log('不是J3模块包');

                    case 4:
                        _context.next = 6;
                        return download(name, stdout, stderr);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

function run(cmd, args, options, stdout, stderr) {
    return new Promise(function (resolve, reject) {
        var ls = (0, _child_process.spawn)(cmd, args, options);

        var err = '',
            info = '';
        ls.stdout.on('data', function (data) {
            info += data;
            stdout(data);
        });

        ls.stderr.on('data', function (data) {
            err += data;
            stderr(data);
        });

        ls.on('exit', function () {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}
//# sourceMappingURL=download.js.map