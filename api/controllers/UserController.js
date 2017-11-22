/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var user = require("../models/User");
module.exports = {
	hello:function(req,res){
	  res.view({data:{title:"test"}})
  },
  test2:function (req,res) {
    res.view({data:{title:"Tom"}})
  },
  getUser:function (req,res) {
    user.findOne();
  }
};

