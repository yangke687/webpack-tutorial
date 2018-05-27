import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch("/api/comments/show?id=4199740256395164&page=1")
  .then(res => {
    res.json()
      .then(data => { console.log(data); });
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
