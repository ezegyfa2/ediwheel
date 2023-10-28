const mix = require('laravel-mix');
const path = require('path')
require('laravel-mix-compress')
require('helper-vue-components/AssetCompiler.js')
const aboutUsImageGenerator = require('ediwheel-vue-components/AboutUs/Description/Images/generator.js')

global.currentWebpackConfig = {
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        chunkFilename: 'js/[name].bundle.js',
        publicPath: '/',
    }
}
mix.webpackConfig(currentWebpackConfig)
//compileAssets(mix, 'ediwheel-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'ediwheel-vue-components', [ 'AboutUs' ])
compileAssets(mix, 'ediwheel-vue-components', [ 'ContactAndFAQ' ])
//aboutUsImageGenerator.generate()
/*mix.js('resources/js/basicPackages.js', 'public/js').vue()
mix.js('resources/js/welcome.js', 'public/js').vue()
mix.js('resources/js/aboutUs.js', 'public/js').vue()
mix.js('resources/js/contactAndFAQ.js', 'public/js').vue()*/
