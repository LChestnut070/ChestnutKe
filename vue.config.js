// module.exports = {
//   devServer: {
//     // 端口号
//     port: 8080,
//     // 配置不同的后台API地址
//     proxy: {
//       '/api': {
//         target: 'http://www.dzm.com',
//         ws: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//     },
//     module: {
//     rules: [
//       {
//         test: /\.less$/i,
//         use: [
//           // compiles Less to CSS
//           "style-loader",
//           "css-loader",
//           "less-loader",
//         ],
//       },
//     ],
//   },
// }
