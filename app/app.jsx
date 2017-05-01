var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});
store.dispatch(actions.toggleShowCompleted());

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// load semantic ui
// require('css!semantic-ui-css/semantic.min.css');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
