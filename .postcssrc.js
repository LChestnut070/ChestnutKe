<<<<<<< HEAD
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
=======
module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        // "autoprefixer": {
        //     browsers: ['Android >= 4.0', 'iOS >= 7', "last 2 versions"]
        // },
        "postcss-pxtorem": {
            rootValue: 16, // 640
            propList: ['*'],
            selectorBlackList: ['.xxx-datetime', '.scroller-component', '.scroller-indicator', 'scroller-item'],
            minPixelValue: 1,
            exclude: /src/ig // src 目录下样式全部不转义
        }
    }
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
}
