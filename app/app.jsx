var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var actions = require('actions');
var store = require('configureStore').configure();
import CommentApp from 'CommentApp'




var css = require('./style.scss');
var mainCss = require('./main.css');
//var foundation = require('../node_modules/foundation-sites/dist/css/foundation.min.css');
var bootstrap = require('../node_modules/bootstrap-css-only/css/bootstrap.min.css');



store.dispatch(actions.addComment('Even in these scenarios though, you can usually skirt away and clear the board. '));






ReactDOM.render(
    <Provider store={store}>
      <CommentApp/>
    </Provider>,
          document.getElementById('app')
      );
