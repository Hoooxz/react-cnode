import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';
import './static/css/article.less'
import App from './containers';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
