import './css/base.less';
import { c } from './utils';
console.log(c());

var app = document.getElementById('app');
var div = document.createElement('div');
div.className="box";
app.appendChild(div);