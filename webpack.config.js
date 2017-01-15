var glob = require('glob')
var path = require('path')

 module.exports = {
     entry: glob.sync(__dirname + '/src/javascripts/**/*.js'),
     output: {
         path: './bin',
         filename: 'app.bundle.js'
     }
 }
