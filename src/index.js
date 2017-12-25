import download from './download'
import lang from 'i18n'

lang.configure({
    locales:['zh-CN'],
    defaultLocale: 'zh-CN',
    directory: __dirname  + '/lang',
    updateFiles: false,
    indent: "\t",
    extension: '.json'  // 由于 JSON 不允许注释，所以用 js 会方便一点，也可以写成其他的，不过文件格式是 JSON
})


export { download }
