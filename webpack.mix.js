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
//compileAssets(mix, 'ediwheel-vue-components', [ 'ContactAndFAQ' ])
//aboutUsImageGenerator.generate()
mix.js('resources/js/basicPackages.js', 'public/js').vue()
mix.js('resources/js/welcome.js', 'public/js').vue()
mix.js('resources/js/aboutUs.js', 'public/js').vue()
mix.js('resources/js/contactAndFAQ.js', 'public/js').vue()
mix.copy(
    path.join('node_modules', 'ediwheel-vue-components', 'src', 'Welcome', 'CompiledTemplate.json'), 
    path.join('app', 'Templates', 'Welcome.json')
)
mix.copy(
    path.join('node_modules', 'ediwheel-vue-components', 'src', 'AboutUs', 'CompiledTemplate.json'), 
    path.join('app', 'Templates', 'AboutUs.json')
)
mix.copy(
    path.join('node_modules', 'ediwheel-vue-components', 'src', 'ContactAndFAQ', 'CompiledTemplate.json'), 
    path.join('app', 'Templates', 'ContactAndFAQ.json')
)