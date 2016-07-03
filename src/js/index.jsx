var React = require('react');
var ReactDOM = require('react-dom');
var _ReactRouter = require('react-router');
var Users = require('./user.jsx');
var About = require('./about.jsx');

var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;

require("css/libs/normalize.css");

require("css/modules/_init");
require("css/modules/_oo");
require("css/modules/_grid");
require("css/modules/_header");

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="header">
          <nav className="header-menu">
            <Link to="/" activeClassName="active">Home</Link>
            <Link to="/about" activeClassName="active">About</Link>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
})

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Users} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'))
