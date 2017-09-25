const env = process.env.NODE_ENV || 'development';
const config = {
    development: require('./dev.config.js'),
    production:require('./pro.config.js')
}[env];

module.exports = config;
