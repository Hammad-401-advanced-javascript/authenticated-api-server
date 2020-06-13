'use strict';
const schemaProducts=require('./products.schema');
const ModelProcuts=require('../model');


class Products extends ModelProcuts{
  constructor(){
    super(schemaProducts);
  }
}

module.exports= new Products(schemaProducts);