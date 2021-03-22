// 项目目录下（package.json所在目录，下同）新建 fx.webpack.config.js  
module.exports = {
    fxVue: true, // 是否使用Vue
    fxReact: false, // 是否使用React, 暂未支持该配置
    fxPreProcessors: {
        less: true, // 是否使用less
        scss: true, // 是否使用scss
        sass: true, // 是否使用sass
        postcss: false, // 是否使用postcss
        styl: false, // 是否使用styl
        stylus: false, // 是否使用stylus
        cssOption: {}, // css配置,参考 https://www.webpackjs.com/loaders/css-loader/#选项
        lessOption: {}, // less配置,参考 https://www.webpackjs.com/loaders/less-loader/#示例
        sassOption: {}, // sass/scss配置,参考 https://www.webpackjs.com/loaders/sass-loader/#示例
        postcssOption: {}, // postcss配置,参考 https://www.webpackjs.com/loaders/postcss-loader/#options
        stylusOption: {}, // stylus/styl配置,参考 https://github.com/shama/stylus-loader
        sassResourcesPath: ['src/assets/scss/global.scss'] // sass/scss全局变量文件，配置相对路径，例如sassResourcesPath: ['src/assets/scss/global.scss']
    },
    fxEntry: './src/main.js', // 单个应用入口,
    fxOutputPath: 'dist', // 输出目录名称
    fxAssetsPath: 'static', // 输出静态文件目录
    fxAppPublic: 'static',// 要拷贝的源文件目录名称
    fxHtml: {
        title: 'title', // 生成html文件的标题,在模板中配置<title><%= htmlWebpackPlugin.options.title %></title>
        template: 'index.html', // html模板文件名，请放在项目目录下
        filename: 'index.html', // 输出的html的文件名称，将输出到fxOutputPath配置目录下
    },
    fxAlias: {
        '@': 'src', // 创建import或require的别名，来确保模块引入变得更简单，配置相对路径，例如 'assets_img_common': 'src/assets/img/common'。
    },
    fxDevServer: {
        https: false,
        host: '0.0.0.0',
        port: 8062, // dev-server 服务端口号
        hot: true, // 启用webpack的热模块更新
        compress: false, //启用gzip压缩
        open: false, // 告诉dev-server在服务器启动后打开浏览器。将其设置为true以打开默认浏览器。
        clientLogLevel: 'warning', //配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台里看到的日志内容
        proxy: {
            // 代理一些URL。具体用法见https://github.com/chimurai/http-proxy-middleware
            '/v1': {
                target: 'https://www.easy-mock.com/mock/58ff650c739ac1685205a1a7/foresee',
                changeOrigin: true
            },
        },
        historyApiFallback: true // 无法找到资源的url会访问默认index.html,路由模式改为history必须
    },
    fxWebpack: {
        // 以下配置已有默认值，一般无需配置，若有需要，请按webpack配置要求进行配置
        module: {
            rules: [],
        },
        optimization: {
            minimizer: [],
        },
        performance: {},
        externals: {},
        plugins: []
    }
}