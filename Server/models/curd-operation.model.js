var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
   Name: { type : String },
   Phone: { type : String },
   Email: { type : String },
   },
   { timestamps: true }
);

var VarUsers = mongoose.model('Users', UsersSchema, 'Users_List');

module.exports ={
   UsersSchema: VarUsers
};
