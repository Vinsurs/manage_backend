'use strict';
const Service = require('egg').Service;
class CategoryService extends Service {
  async getCategory(id) {
    let res;
    if (id) {
      res = await this.ctx.model.CategoryModel.findById(id);
    } else {
      res = await this.ctx.model.CategoryModel.find();
    }
    return res;
  }
  async checkIsExistByName(categoryName) {
    const res = await this.ctx.model.CategoryModel.find({ name: categoryName });
    if (res && res.length > 0) {
      return true;
    }
    return false;
  }
  async delCategory(id) {
    return await this.ctx.model.CategoryModel.deleteOne({ _id: id });
  }
  async addCategory(category) {
    const isExist = await this.checkIsExistByName(category.name);
    if (isExist === true) {
      return { failed: true, msg: '此类别已存在' };
    }
    const res = await this.ctx.model.CategoryModel.insertMany([ category ]);
    return { failed: false, data: res };
  }
  async modifyCategory(id, category) {
    const res = await this.ctx.model.CategoryModel.updateOne(
      { _id: id },
      category
    );
    return res;
  }
}
module.exports = CategoryService;
