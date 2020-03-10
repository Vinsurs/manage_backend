'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ProductSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    store: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: Array,
    },
    detail: {
      type: String,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
  });
  return mongoose.model('productModel', ProductSchema, 'product');
};
