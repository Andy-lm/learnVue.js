module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'html-loader',
                        // 代码压缩
                        options: {
                            minimize: true
                        }
                    }
                }
            ]
        }
    }
}