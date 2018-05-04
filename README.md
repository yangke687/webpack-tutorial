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
  + express + webpack-dev-middleware





  
