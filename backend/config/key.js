
if(process.env.NODE_ENV ==="product") {
    module.exports= require('./pro');
}else{
    module.exports = require('./dev');
}
