import base from './css/base.css'
import common from './css/common.css'

// css modules
let rootDom = document.getElementById('app')
rootDom.innerHTML = `<div class="${base.box}"></div>`

// css-loader/usable example
//base.use()
//common.use()

// var flag = false

// setInterval(function(){
//   console.log('tick')
//   if(flag) {
//     base.unuse()
//   } else {
//     base.use()
//   }
//   flag = !flag
// }, 500)
