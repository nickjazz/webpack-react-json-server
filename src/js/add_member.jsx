/** @jsx React.DOM */

var React = require('react');
var faker = require('faker');

var AddMember = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();

    this.props.onAddSubmit({
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      title: faker.name.jobTitle(),
      day_start: faker.random.number({min:1, max:90}),
      day_end: faker.random.number({min:1, max:90}),
      follower: faker.random.number({min:10, max:999}),
      following: faker.random.number({min:10, max:999}),
      reviews: faker.random.number({min:10, max:999})
    });

  },
  render: function() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <button>Add</button>
      </form>
      )
  }
})

module.exports = AddMember;
