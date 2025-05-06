import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { merge } from 'webpack-merge'
import commonConfiguration from './webpack.common.js'

export default merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
            [
                new CleanWebpackPlugin()
            ]
    }
)
