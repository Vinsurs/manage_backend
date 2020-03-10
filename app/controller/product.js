'use strict';
const Controller = require('egg').Controller;
class ProductController extends Controller {
  async addProduct() {
    const { ctx, service } = this;
    const product = ctx.request.body;
    const res = await service.productService.addProduct(product);
    if (res.failed) {
      ctx.body = {
        status: 0,
        msg: res.msg,
      };
    } else {
      if (res.data && res.data.length !== 0) {
        ctx.body = {
          status: 1,
          msg: '添加成功',
        };
      } else {
        ctx.body = {
          status: 0,
          msg: '添加失败',
        };
      }
    }
  }
  async delProduct() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const res = await service.productService.delProduct(id);
    if (res.ok === 1 && res.deletedCount !== 0) {
      ctx.body = {
        status: 1,
        msg: '删除成功',
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '删除失败',
      };
    }
  }
  async getProduct() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const res = await service.productService.getProduct(id);
    if (res) {
      ctx.body = {
        status: 1,
        data: res,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '获取商品信息失败',
      };
    }
  }
  async modifyProduct() {
    const { ctx, service } = this;
    const {
      id,
      name,
      price,
      store,
      description,
      categoryId,
      imgUrl,
      detail,
      isOnSale,
    } = ctx.request.body;
    const product = {
      name,
      price,
      store,
      description,
      categoryId,
      imgUrl,
      detail,
      isOnSale,
    };
    const data = {};
    for (const key in product) {
      if (product.hasOwnProperty(key)) {
        const item = product[key];
        if (item !== undefined) {
          data[key] = item;
        }
      }
    }
    const res = await service.productService.modifyProduct(id, data);
    if (res.nModified !== 0) {
      ctx.body = {
        status: 1,
        msg: '更新商品信息成功',
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '更新商品信息失败',
      };
    }
  }
}
module.exports = ProductController;
