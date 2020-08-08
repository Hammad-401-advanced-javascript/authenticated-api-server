'use strict';

const schemaCategories=require('./categories.schema');
const modelCategories=require('../model');

class Categories extends modelCategories{
  constructor(){
    super(schemaCategories);
  }
}

module.exports=new Categories(schemaCategories);