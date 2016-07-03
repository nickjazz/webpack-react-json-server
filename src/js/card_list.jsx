/** @jsx React.DOM */
var React = require('react');
var CardItem = require('./card_item.jsx');

require("css/modules/_user");
require("css/modules/_card");

var cardList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  handleRemove: function(i) {
    this.props.onChangeIs({id: i});
  },

  render() {
    var itemNodes = this.props.data.map(function(card, i) {
      return (
        <CardItem onClick={this.handleRemove.bind(null, i)}
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          start = {card.day_start}
          end = {card.day_end}
          follower = {card.follower}
          following = {card.following}
          reviews = {card.reviews}
          key={card.id}/>
      );
    }.bind(this));

    return (
      <div className="container-fluid">
        <ul className="cards">
          {itemNodes}
        </ul>
      </div>
    );
  }
});

module.exports = cardList;
