import './subPageB'
import './subPageA'

import * as _ from 'lodash'

import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function(subPageA){
  console.log(subPageA)
})

import(/* webpackChunkName: 'subPageB' */'./subPageB').then(function(subPageB){
  console.log(subPageB)
})

export default 'pageB'