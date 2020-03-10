'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async doLogin() {
    const user = await this.service.userService.login(this.ctx.request.body);
    if (user && user._id) {
      this.ctx.body = {
        status: 1,
        user,
      };
    } else {
      this.ctx.body = {
        status: 0,
        msg: '用户名或密码错误',
      };
    }
  }
  async doRegister() {
    const { ctx, service } = this;
    const bRes = await service.userService.register(ctx.request.body);

    if (bRes) {
      ctx.body = {
        status: 1,
        msg: '注册成功',
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '注册失败',
      };
    }
  }
  async doUpdate() {
    const { ctx, service } = this;
    const { _id, username, password, phone, email, role_id } = ctx.request.body;
    const user = { username, password, phone, email, role_id };
    const data = {};
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        const item = user[key];
        if (item) {
          data[key] = item;
        }
      }
    }
    const res = await service.userService.update(_id, data);
    if (res.nModified !== 0) {
      ctx.body = {
        status: 1,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '更新用户信息失败',
      };
    }
  }
  async doRemove() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    const res = await service.userService.remove(id);
    if (res.deletedCount !== 0) {
      ctx.body = {
        status: 1,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '删除用户信息失败',
      };
    }
  }
  async doFind() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const res = await service.userService.find(id);
    if (res) {
      ctx.body = {
        status: 1,
        data: res,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '查找用户信息失败',
      };
    }
  }
}
module.exports = UserController;
