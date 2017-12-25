

let spawn = require('child_process').spawn

let ps = spawn('npm.cmd', ['view', 'node-sql'], { cwd: '' })

let err = '', info = ''
ps.stdout.on('data', data => {
    info += data
    console.log(data.toString())
})

ps.stderr.on('data', data => {
    err += data
    console.error(dataa.toString())
})

ps.on('exit', () => {
    console.log('process exit!')
})
