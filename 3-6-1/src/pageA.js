//import './subPageA'
//import './subPageB'

// require.ensure(['./subPageA', './subPageB'], function(require){
//   var subPageA = require('./subPageA')
//   var subPageB = require('./subPageB')
// })

require.include('./moduleA')

require.ensure(['./subPageA'], function(){
  var subPageA = require('./subPageA')
}, 'subPageA')

require.ensure(['./subPageB'], function() {
  var subPageB = require('./subPageB')
}, 'subPageB')

//import * as _ from 'lodash'
require.ensure(['lodash'], function(require){
  var _ = require('lodash')
}, 'vendor') // chunkName

export default 'pageA'