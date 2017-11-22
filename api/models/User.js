/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    userName: {
      type: "String",
      required: true
    },
    passWord: {
      type: "String",
      required: true
    }
  },

  //查询一个
  findOne:function(){
    this.findOne({userName:"admin"}).exec(function (err,re) {
      console.info(re)
    })
  }
};

