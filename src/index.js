import download from './download'
import lang from 'i18n'

lang.configure({
    locales:['en-US', 'zh-CN', 'zh-TW'],  // setup some locales - other locales default to en_US silently
    defaultLocale: 'zh-CN',
    directory: './lang',  // i18n 翻译文件目录，我的是 i18n， 可以写成其他的。
    updateFiles: false,
    indent: "\t",
    extension: '.json'  // 由于 JSON 不允许注释，所以用 js 会方便一点，也可以写成其他的，不过文件格式是 JSON
})


export { download }
