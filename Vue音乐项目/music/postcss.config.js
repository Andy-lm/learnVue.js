module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 100, // 根元素字体大小
            // propList: ['width', 'height']
            // 不需要转换的将Px改为大写便好
            propList: ['*']
        }
    }
}