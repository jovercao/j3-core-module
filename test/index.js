// /*
// const fs = require('fs')

// // fs.readFile('d:\\a.txt')
// //     .then((ret) => {
// //         console.log(ret)
// //     })
// //     .error((err) => {
// //         console.log(err)
// //     })



// function readFile() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('d:\\a.txt', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


// async function doReadFile() {
//     try {
//         let data = await readFile()
//         console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
// }


// */

// // import fs from 'fs-promise'

// // async function doReadFile() {
// //     try {
// //         let data = await fs.readFile('d:\\a.txt')
// //         console.log(data)
// //     } catch (err) {
// //         console.error(err)
// //     }
// // }

// // doReadFile()



import { download } from '../src'
import { npmInstall } from '../src/download'

// var download = require('./src')


const module_name = 'node-sql'

// 执行测试
async function doTest(params) {

    // npm 模块下载测试(含验证)
    // await download(module_name)

    // npm 模块下载测试（不含验证）
    await npmInstall(module_name, (data) => {
        console.log(data.toString())
    }, data => {
        console.error(data.toString())
    })
}


doTest()

