var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var goodsModel = require("../models/goods");

//如果数据库有账号和密码就写在这。
mongoose.connect("mongodb://127.0.0.1:27017/design"); //design是数据库名

//用来监听数据库是否连接成功（还有其他的监听方法，比如disconnected,error）
mongoose.connection.on("connected", function() {
  console.log("connected");
});

//定义路由，当访问该路由的时候，去数据库查找信息并返回
router.get("/", function(req, res, next) {
  //{}里面代表的是查询的参数，docs表示查询出来的文档
  goodsModel.find({}, function(err, docs) {
    if (err) {
      res.json({
        success: "fail",
        data: null
      });
    } else {
      res.json({
        success: "true",
        data: docs
      });
    }
  });
});
module.exports = router;
