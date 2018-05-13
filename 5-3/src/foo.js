import React from 'react';
import moduleA from './moduleA';
console.log('hello,world! foo');

/** dynamically load modules will create '0' named chunk 
 * so add a new featured chunkName for dynamical modules
*/
import(/* webpackChunkName: 'async' */'./async').then(function(a){
  console.log(a);
});