/* 配置文件 */
import path from 'path'

export default {
    node_path: 'node',
    // win32平台下npm路径为npm.cmd
    npm_path: process.platform == 'win32' ? 'npm.cmd' : 'npm',
    modules_path: path.join(process.cwd(), 'j3_modules')
} 
