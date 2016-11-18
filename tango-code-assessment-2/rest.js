var mysql = require('mysql');

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/cars",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["car"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Cars" : rows});
            }
        });
    });

    router.get("/cars/:item_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["car","item_number",req.params.item_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Cars" : rows});
            }
        });
    });

    router.get("/cars/:vid",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["car","VID",req.params.vid];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Cars" : rows});
            }
        });
    });

    router.get("/images",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["images"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Images" : rows});
            }
        });
    });

    router.get("/images/:item_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["images", "item_number", req.params.item_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Images" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;