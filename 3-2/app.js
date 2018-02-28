// es6
import sum from './sum';

//commonJS
const minus = require('./minus');

//AMD
require(['./multi'], function(multi){
  console.log('multi(2, 3)=', multi(2, 3));
});

console.log('sum(2, 3)=', sum(2, 3));

console.log('minus(2, 3)=', minus(2, 3));