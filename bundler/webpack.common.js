import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin, { loader as _loader } from "mini-css-extract-plugin";
import { resolve } from "path";

export const entry = resolve(__dirname, "../src/script.js");
export const output = {
    filename: "bundle.[contenthash].js",
    path: resolve(__dirname, "../dist"),
};
export const devtool = "source-map";
export const plugins = [
    new CopyWebpackPlugin({
        patterns: [{ from: resolve(__dirname, "../static") }],
    }),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, "../src/index.html"),
        minify: true,
    }),
    new MiniCSSExtractPlugin(),
];
export const module = {
    rules: [
        {
            test: /\.(html)$/,
            use: ["html-loader"],
        },

        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },

        {
            test: /\.css$/,
            use: [_loader, "css-loader"],
        },

        {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: "assets/images/",
                    },
                },
            ],
        },

        {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: "assets/fonts/",
                    },
                },
            ],
        },

        {
            test: /\.(glsl|vs|fs|frag)$/,
            exclude: /node_modules/,
            use: ["raw-loader"],
        },
    ],
};
