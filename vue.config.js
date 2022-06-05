const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        host: '80.87.192.115',
        port: 9090
    },
}