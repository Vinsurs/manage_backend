'use strict';
const Service = require('egg').Service;
class ProductService extends Service {
  async getProduct(id) {
    let res;
    if (id) {
      res = await this.ctx.model.ProductModel.findById(id);
    } else {
      res = await this.ctx.model.ProductModel.find();
    }
    return res;
  }
  async checkIsExistByName(productName) {
    const res = await this.ctx.model.ProductModel.find({ name: productName });
    if (res && res.length > 0) {
      return true;
    }
    return false;
  }
  async delProduct(id) {
    return await this.ctx.model.ProductModel.deleteOne({ _id: id });
  }
  async addProduct(product) {
    const isExist = await this.checkIsExistByName(product.name);
    if (isExist === true) {
      return { failed: true, msg: '此商品已存在' };
    }
    const res = await this.ctx.model.ProductModel.insertMany([ product ]);
    return { failed: false, data: res };
  }
  async modifyProduct(id, product) {
    const res = await this.ctx.model.ProductModel.updateOne(
      { _id: id },
      { $set: product }
    );
    return res;
  }
}
module.exports = ProductService;
