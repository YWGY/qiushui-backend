var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var goodsSchema = new Schema({
  //这里根据你的数据库的内容来更改
  goodId: Number,
  goodName: Number,
  goodPrice: Number,
  goodImage: String,
  createTime: String
});
module.exports = mongoose.model("good", goodsSchema, "good");
