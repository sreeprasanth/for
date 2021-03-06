const mongoose = require('mongoose');  // requiring code of mongoose

mongoose.connect('mongodb://localhost:27017/ProductDb');   // connection code to database

const Schema = mongoose.Schema;   // ACESSING SCHEMA FROM THE MONGOOSE PACKAGE AND STORED IT IN A VARIABLE

const NewProductSchema = new Schema({
  productId:Number,
productName:String,
productCode:String,
releaseDate:String,
description:String,
price:Number,
starRating:Number,
imageUrl:String

});   // using constuctor function we can create an instance of schema to define our document structure

var Productdata = mongoose.model('Product',NewProductSchema);  // creation of model and stored it into a variable inorder to acessing it to diffrent files for creating instance thereby adding the documents in to the collection

module.exports = Productdata // export the model in to other files for creating instances to store the documents.

