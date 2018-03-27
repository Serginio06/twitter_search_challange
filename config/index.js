console.log("process.env.NODE_ENV=",process.env.NODE_ENV);

if (process.env.NODE_ENV === 'dev'){
    console.log("this is dev baby=");
    module.exports = require('./dev-keys');
} else {
    console.log("??????=");
    module.exports = require('./prod-keys');
}