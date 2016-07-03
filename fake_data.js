/*global require */

var MakeData = function(){
  var faker = require('faker');
  var _     = require('lodash');
  return {
    member: _.times(30, function(n){
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        title: faker.name.jobTitle(),
        day_start: faker.random.number({min:1, max:90}),
        day_end: faker.random.number({min:1, max:90}),
        follower: faker.random.number({min:10, max:999}),
        following: faker.random.number({min:10, max:999}),
        reviews: faker.random.number({min:10, max:999})
      }
    })
  }
};

module.exports = MakeData;
