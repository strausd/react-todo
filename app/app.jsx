var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// load semantic ui
// require('css!semantic-ui-css/semantic.min.css');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boiler Plate 3 project</p>,
    document.getElementById('app')
);
