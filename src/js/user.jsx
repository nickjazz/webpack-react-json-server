/** @jsx React.DOM */

var React = require('react');
var CardList = require('./card_list.jsx');
var AddMember = require('./add_member.jsx');
var $ = require('jquery');


require("css/libs/normalize.css");

require("css/modules/_init");
require("css/modules/_oo");
require("css/modules/_grid");
require("css/modules/_header");

var Users = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {data: []}
  },

  loadData: function() {
    $.ajax({
      url: 'member?_sort=views&_order=DESC',
      dataType: 'json',
      success: function(data) {
        // set data
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        // console.log("\nError:" + err);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadData()
  },

  handleUserSubmit: function(user) {
    $.ajax({
      url: 'member?_sort=views&_order=DESC',
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function(data) {
        this.loadData()
      }.bind(this),
      error: function(xhr, status, err) {
        // console.error('member', status, err.toString());
      }.bind(this)
    });
  },

  handleRemove: function(user){
    console.log(user.id);
    this.setState({
      data: this.state.data.filter((_, i) => i !== user.id)
    });
    // work in real
    // $.ajax({
    //   url: 'member/'+user.id,
    //   type: "DELETE",
    //   success: function() {
    //     this.loadData()
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //   }.bind(this)
    // });
  },

  render: function (){
    return(
      <div>
        <AddMember onAddSubmit={this.handleUserSubmit} />
        <CardList data={this.state.data} onChangeIs={this.handleRemove} />
      </div>
    )
  }
});

module.exports = Users;
