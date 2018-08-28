module.exports = function(app) {
    var Controller = require('./../controller/curd-operation.controller.js');

    app.post('/API/CurdOperation/Create', Controller.Create);

    app.get('/API/CurdOperation/List', Controller.List);

    app.post('/API/CurdOperation/Update', Controller.Update);

    app.get('/API/CurdOperation/Delete/:User_Id', Controller.Delete);

};