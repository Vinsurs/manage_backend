'use strict';
const Controller = require('egg').Controller;
class CategoryController extends Controller {
  async addCategory() {
    const { ctx, service } = this;
    const category = ctx.request.body;
    const res = await service.categoryService.addCategory(category);
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
  async delCategory() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const res = await service.categoryService.delCategory(id);
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
  async getCategory() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const res = await service.categoryService.getCategory(id);
    if (res) {
      ctx.body = {
        status: 1,
        data: res,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '获取类别信息失败',
      };
    }
  }
  async modifyCategory() {
    const { ctx, service } = this;
    const { id, name } = ctx.request.body;
    const res = await service.categoryService.modifyCategory(id, { name });
    if (res.nModified !== 0) {
      ctx.body = {
        status: 1,
        msg: '更新类别信息成功',
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '更新类别信息失败',
      };
    }
  }
}
module.exports = CategoryController;
