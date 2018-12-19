module.exports = {
    outputDir: 'wwwroot',
    baseUrl: "/",
    chainWebpack: config => {
        config.plugins.delete('hmr');
    }
}
