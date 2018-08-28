var UsersModel = require('./../models/curd-operation.model.js');
var mongoose = require('mongoose');

exports.Create = function(req, res) {

   var User_Create = new UsersModel.UsersSchema({
      Name: req.body.Name,
      Phone : req.body.Phone,
      Email: req.body.Email,
   });
   User_Create.save( function(err, result) {
      if (err) {
         res.status(400).send({Status: false, Message: 'Some Error Occurred!'});
      }else {
         res.status(200).send({Status: true, Response: result});
      }
   });
   
};

exports.List = function(req, res) {

   UsersModel.UsersSchema.find( {}, function(err, result){
      if (err) {
         res.status(400).send({Status: false, Message: 'Some Error Occurred!'});
      }else {
         res.status(200).send({Status: true, Response: result});
      }
   });

};

exports.Update = function(req, res) {

   UsersModel.UsersSchema.findOne( {_id: req.body.User_Id}, function(err, result){
      if (err) {
         res.status(400).send({Status: false, Message: 'Some Error Occurred!'});
      }else {
         result.Name = req.body.Name;
         result.Email = req.body.Email;
         result.Phone = req.body.Phone;
         result.save( function(err_1, res_1) {
            if (err_1) {
               res.status(400).send({Status: false, Message: 'Some Error Occurred!'});
            }else {
               res.status(200).send({Status: true, Response: res_1});
            }
         });
      }
   });

};


exports.Delete = function(req, res) {

   UsersModel.UsersSchema.deleteOne( { _id: req.params.User_Id }, function(err, result){
      if (err) {
         res.status(400).send({Status: false, Message: 'Some Error Occurred!'});
      }else {
         res.status(200).send({Status: true, Message: 'Successfully Deleted!'});
      }
   });
   
};
