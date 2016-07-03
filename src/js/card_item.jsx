/** @jsx React.DOM */

var React = require('react');

var cardItem = React.createClass({
  propTypes: {
    avatar: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    start: React.PropTypes.number.isRequired,
    end: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
    follower: React.PropTypes.number.isRequired,
    reviews: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      onClick: function() {}
    }
  },

  render() {
    return (
      <li className="card" >
        <div className="card-inner">
          <div className="card-control pull-left">
            <img src={this.props.avatar} className="user-avatar" width="40" />
            <button onClick={this.props.onClick}>Delect</button>
          </div>
          <div className="card-tag card-job">{this.props.title}</div>
          <div className="card-title">{this.props.name}</div>
          <div className="row border card-main">
            <div className="col-xs-6 border-right">
              <span className="card-info">{this.props.start}</span>
              <span className="card-tag">days left in design</span>
            </div>
            <div className="col-xs-6">
              <span className="card-info">{this.props.end}</span>
              <span className="card-tag">days to finish</span>
            </div>
          </div>
          <div className="card-bottom border-top">
            <div className="row">
              <div className="col-xs-4 border-right">{this.props.following}</div>
              <div className="col-xs-4 border-right">{this.props.follower}</div>
              <div className="col-xs-4">{this.props.reviews}</div>
            </div>
          </div>

        </div>
      </li>
    );
  }
});

module.exports = cardItem;
