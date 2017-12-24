import fs from 'fs-promise'

async function doReadFile() {
    try {
        let data = await fs.readFile('d:\\a.txt')
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

doReadFile()



// import { download } from './src'

// download('node-sql')

// npmInstall('', info => console.log(info), err => console.error(err)).then(() => {
//     console.log(i18n.__('install_complete'))
// })
// .error(err => {
//     console.error(i18n.__('install_failure'))
//     console.log(err)
// })
