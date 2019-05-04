const environment = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[ process.NODE_ENV || "development" ]

export default Object.assign({
    host: process.HOST || 'localhost',
    port: process.PORT || 3000
}, environment);
