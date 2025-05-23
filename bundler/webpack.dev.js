import { v4 } from 'internal-ip'
import { getPort } from 'portfinder-sync'
import { merge } from 'webpack-merge'
import commonConfiguration from './webpack.common.js'

const infoColor = (_message) => {
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`
}

export default merge(
    commonConfiguration,
    {
        mode: 'development',
        devServer:
        {
            host: '0.0.0.0',
            port: getPort(8080),
            contentBase: './dist',
            watchContentBase: true,
            open: true,
            https: false,
            useLocalIp: true,
            disableHostCheck: true,
            overlay: true,
            noInfo: true,
            after: function (app, server, compiler) {
                const port = server.options.port
                const https = server.options.https ? 's' : ''
                const localIp = v4.sync()
                const domain1 = `http${https}://${localIp}:${port}`
                const domain2 = `http${https}://localhost:${port}`

                console.log(`Project Start Running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`)
            }
        }
    }
)
