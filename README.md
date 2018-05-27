# webpack-tutorial
+ 3-2: Bundle JS
+ 3-3:
  + babel-presets
    + es2015
    + es2016
    + es2017
    + env
    + babel-preset-react
    + babel-preset-stage 0 - 3
  + babel-polyfill: global polyfill
    + Promise
    + Generator
    + Map
    + Set
    + ...
  + babel-plugin-transform-runtime: scope polyfill
+ 3-5: Load .ts
+ 3-6: CommonsChunkPlugin
  + async: true
+ 3-6-1: Webpack methods
  + require.ensure
  + require.include
  + dynamic import
+ 3-7: CSS
  + style-loader
    + insertAt
    + insertInto (DOM)
    + singleton
    + transform
  + style-loader/url
  + style-loader/useable
  + css-loader
    + alias
    + importLoader
    + Minimize: boolean
    + modules
      + :local
      + :global
      + :compose
      + :compose ... from ...
      + localIdentName: '[path][name]_[local]--[hash:base64:5]'
    + extract-text-webpack-plugin
      + filename: [name].min.css
    + PostCSS in Webpack
      + PostCss
      + AutoPrefixer
      + CSS-nano: minimize
      + CSS-next
+ 3-8: Tree Shaking
  + JS Tree Shaking
    + uglifyjs-webpack-plugin
  + CSS Tree Shaking
    + Purify CSS
      + options: 
        + paths: glob.sync([])
        + npm install glob-all --save-dev
      + purifycss-webpack
+ 3-10: Image File Handler
  + file-loader (css image)
  + url-loader (base64)
  + img-loader (compress image)
  + postcss-sprites
+ 3-10: 3rd party JS library
  + webpack.providePlugin
  + imports-loader
  + window
+ 3-11: HtmlWebpackPlugin
  + options
    + template
    + filename
    + minify
    + chunks
    + inject
  + html-loader: webpack handle html image file
    + options
      + attrs: [img: src]
+ Optimize
  + inline-manifest-webpack-plugin
  + html-webpack-inline-chunk-plugin

+ 4-1: Dev Environment
  + webpack watch mode
    + webpack -watch
    + webpack -w
  + webpack-dev-server
    + Features:
      + live reloading
      + https
      + rewrite
      + proxy
      + module hot reloading
        + 保持应用数据状态
        + 节省调试时间
        + 样式调试快
        + use
          + devServer.hot
          + webpack.HotModuleReplacementPlugin
          + module.hot
          + module.hot.accept
          + module.hot.decline
    + options: 
      + inline
      + contentBase
      + port
      + historyAPIFallback (server side rendering)
      + https
      + proxy
        + http-proxy-middleware
        + devServer.proxy
        + options:
          + target: remote address
          + changeOrigin
          + headers
          + logLevel
          + pathRewrite 
      + hot
      + openpage
      + lazy
      + overlay
    + Source Map Debugging
      + Devtool
        + Development Mode
          + eval (compiling fast but includes 'webpack' code )
          + eval-source-map
          + cheap-eval-source-map (* suggest)
          + cheap-module-eval-source-map (* suggest)
        + Production Mode
          + source-map (* suggest)
          + hidden-source-map
          + nosource-source-map
      + css source map loaders
        + css-loader.option.sourcemap
        + less-loader.option.sourcemap
        + sass-loader.option.sourcemap
      + webpack.SourceMapDevToolPlugin
      + webpack.EvalSourceMapDevToolPlugin
    + ESlint
      + eslint
      + eslint-loader
        + options.failOnWarning: boolean
        + options.failOnError: boolean
        + options.formatter
        + options.outputReport
      + eslint-plugin-html: html <script> tag
      + eslint-friendly-formatter: error / warning output format
      + usage:
        + webpack config
        + .eslintrc.*
        + package.json => eslintConfig
      + standard: https://standardjs.com
        + eslint-config-standard
        + eslint-plugin-promise
        + eslint-plugin-standard
        + eslint-plugin-import
        + eslint-plugin-node
        + eslint-config-xxx (airbnb)
  + express + webpack-dev-middleware

+ 4-3: 生产环境与开发环境
  + 开发环境
    + 模块热更新
    + sourceMap
    + 接口代理
    + 代码规范检查
  + 生产环境
    + 提取公用代码
    + 压缩混淆
    + 文件压缩 或 Base64 编码
    + Tree Shaking 去除无用代码
  + 共同点
    + 同样入口
    + 同样的代码处理
    + 同样的解析配置
  + webpack-merge
    + webpack.dev.conf.js
    + webpack.prod.conf.js
+ 4-4: webpack.common.conf.js
  + express or Kao
  + webpack-dev-middleware
  + webpack-hot-middleware
  + http-proxy-middleware
  + connect-history-api-proxy
  + opn: open browser
+ 5-1: Analyse
  + Official Analyse Tool
    + webpack --profile --json > stats.json
    + webpack --profile --json | Out-file 'stats.json' -Encoding OEM
    + http://webpack.github.com/analyse
  + webpack-bundle-analyzer
    + Usage
      + BundleAnalyzerPlugin
      + webpack-bundle-analyzer stats.json
+ 5-2: 优化打包速度
  + 1.1: 分开 vendor 和 app
  + 1.2: DllPlugin
  + 1.3: DllReferencePlugin
  + 2: uglifyJsPlugin
    + 'parallel' options
  + 3.1: HappyPack (apply to loaders, serial => parallel)
  + 3.2: HappyPack.ThreadPool
  + 4: babel-loader
   + options.cacheDirectory
   + include
   + exclude
  + 5: 其他
    + 减少resolve
    + Devtool: 去除sourceMap
    + cache-loader
    + Upgrade node
    + Upgrade webpack
  + 5-3: 长缓存优化 ( long time caching )
    + split 'vendor'
    + extract manifest (webpack runtime)
    + NamedChunksPlugin
    + NamedModulesPlugin
    + Dynamic module name
  + 5-4: 多页面
    + 多入口 Entry
    + 多页面 Html
    + 每个页面有不同的 Chunk
    + 每个页面不同的参数
    + 多配置
      + 多页面对应多个webpack.config.js)
      + 同样也可以多页面共享单份配置文件
      + webpack 3.1.0
      + parallel-webpack 并行打包提高速度
      + 缺点: 多页面多配置不能提取和共享公用代码
    + 单配置
      + 共享各Entry之间的公用代码
      + 缺点: 
        + 打包速度慢
        + 输入内容复杂
+ 6: Vue and Webpack
  + vue-cli
    + npm install vue-cli -g
    + vue --help
    + vue list
      + vue templates
        + simple
        + webpack
        + webpack-simple
        + browserify
        + browserify-simple
    + vue init <template name> <project name>
    + vue init <git repo> <project name>
  + 6-1: vue webpack
    + 项目结构
    + 基本命令
    + 开发配置
    + 工具配置 (babel, eslint...)
    + 其他
  + 6-2: React and Webpack
    + 官方脚手架: 
      + create-react-app
      + react-scripts
        + npm install create-react-app -g
        + npx create-react-app my-project (npm 5.2+)
        + create-react-app my-project (npm 5.2-)
    + 官房脚本
      + npm start
      + npm test
      + npm run build
      + npm run eject
    + 官方提供
      + 支持 es6, jsx
      + 支持 动态import
      + 支持 fetch (polyfill)
      + 支持 proxy
      + 支持 postcss
      + 支持 eslint
      + 支持 unit test
      + 不支持 React hot-reloading * 需要额外配置
      + 不支持 CSS 预处理 (less or sass)
    + 自定义配置
      + proxy
      + Less
      + Hot reloading
    + 项目结构