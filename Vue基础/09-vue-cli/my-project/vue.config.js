const path = require("path");
const webpack = require("webpack");

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, "bundle")
    // }
    // 使用vue内部的指令设置输出目录
    outputDir: "bundle",
    // 也可以使用原生的webpack配置
    configureWebpack: {
        plugins: [
            new webpack.BannerPlugin({
                banner: 'hello world'
            })
        ]
    }
}