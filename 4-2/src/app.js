import './css/base.less';

var app = document.getElementById('app');

$('div').addClass('new');

var api = '';
$.get('/api/comments/show', {
  id: '4193586758833502',
  page: 1,
}, function(res){
  console.log('res:', res);
});