'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CategoryModel = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  });
  return mongoose.model('categoryModel', CategoryModel, 'category');
};
