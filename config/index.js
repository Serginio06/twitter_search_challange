if (process.env.NODE_ENV === 'dev'){
    module.exports = require('./dev-keys');
} else {
    module.exports = require('./prod-keys');
}