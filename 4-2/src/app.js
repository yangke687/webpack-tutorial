import './css/base.less';
import { renderA, componentA } from './components/a';

var app = document.getElementById('app');

var one = document.getElementById('one');
var list = componentA();
one.appendChild(list);

$('div').addClass('new');

var api = '';
$.get('/comments/show', {
  id: '4193586758833502',
  page: 1,
}, function(res){
  console.log('res:', res);
});

$.get('/msg/index', {
  format: 'cards',
}, function(res){
  console.log('res 2:', res);
});

//renderA();

if(module.hot) {
  module.hot.accept('./components/a', function(){ 
    one.removeChild(list); //remove old existed 'ul' list dom before hot reloading
    
    // re-fetch new dom
    let { componentA } = require('./components/a');
    let newList = componentA();
    one.appendChild(newList);
    list = newList;
  });
}