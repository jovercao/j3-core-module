'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.valid = valid;
exports.npmInstall = npmInstall;
exports.npmView = npmView;

var _child_process = require('child_process');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _i18n = require('i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 下载前进行验证，如果确实是j3模块，则下载
exports.default = async function (name, stdout, stderr) {
    if (!(await valid(name, stdout, stderr))) {
        console.log(_i18n2.default.__('not_j3_module'));
        return;
    }
    await npmInstall(name, stdout, stderr);
};

// 验证模块是否符合需求
/*
    用于模块文件及依赖自动下载，使用npm完成，吴丹妮
*/

async function valid(name, stdout, stderr) {
    let json = await npmView(name, data => {
        console.info(data);
    }, data => {
        console.error(data);
    });
    let pkg = eval('(' + json + ')');
    if (!pkg.j3Config) {
        return false;
    }
    return true;
}

// 执行一个进程，并提供输入及输出。
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

async function npmInstall(name, stdout, stderr) {
    try {
        await run(_config2.default.npm_path, ['install', name], {
            cwd: _config2.default.modules_path
        }, stdout, stderr);
    } catch (err) {
        throw err;
    }
}

async function npmView(name, stdout, stderr) {
    try {
        return await run(_config2.default.npm_path, ['view', name], undefined, stdout, stderr);
    } catch (err) {
        throw err;
    }
}
//# sourceMappingURL=download.js.map