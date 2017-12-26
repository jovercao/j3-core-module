/*
    用于模块文件及依赖自动下载，使用npm完成，吴丹妮
*/

import {
    spawn
} from 'child_process'

import config from './config'
import lang from 'i18n'

// 下载前进行验证，如果确实是j3模块，则下载
export default async function (name, stdout, stderr) {
    if (!await valid(name, stdout, stderr)) {
        console.log(lang.__('not-j3-module'))
        return
    }
    await npmInstall(name, stdout, stderr)
    console.log(lang.__('download-complete'))
}

// 验证模块是否符合需求
export async function valid(name, stdout, stderr) {
    let json = await npmView(name, data => {
        console.info(data)
    }, data => {
        console.error(data)
    })
    let pkg = eval('(' + json + ')')
    if (!pkg.j3) {
        return false
    }
    return true
}

// 执行一个进程，并提供输入及输出。
function run(cmd, args, options, stdout, stderr) {
    return new Promise((resolve, reject) => {
        let ls = spawn(cmd, args, options)

        let err = '',
            info = ''
        ls.stdout.on('data', data => {
            let str = data.toString()
            info += str
            stdout(str)
        })

        ls.stderr.on('data', data => {
            let str = data.toString()
            err += str
            stderr(str)
        })

        ls.on('exit', () => {
            if (err) {
                reject(err)
            } else {
                resolve(info)
            }
        })
    })
}

export async function npmInstall(name, stdout, stderr) {
    return await run(config.npm_path, ['install', name], undefined, stdout, stderr)
}

export async function npmView(name, stdout, stderr) {
    return await run(config.npm_path, ['view', name], undefined, stdout, stderr)
}
