'use strict';
const Controller = require('egg').Controller;
class RoleController extends Controller {
  async getRole() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const res = await service.roleService.getRole(id);
    if (res) {
      ctx.body = {
        status: 1,
        data: res,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '获取角色信息失败',
      };
    }
  }
  async setRole() {
    const { ctx, service } = this;
    const role = ctx.request.body;
    const res = await service.roleService.addRole(role);
    if (res._id) {
      ctx.body = {
        status: 1,
        data: res,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '添加角色信息失败',
      };
    }
  }
  async modifyRole() {
    const { ctx, service } = this;
    console.log(ctx.request.body);
    const {
      id,
      role_name,
      priviledges,
      authorizedby,
      authorizedwhen,
    } = ctx.request.body;
    const role = { role_name, priviledges, authorizedby, authorizedwhen };
    const _role = {};
    for (const key in role) {
      if (role.hasOwnProperty(key)) {
        const item = role[key];
        if (item) {
          _role[key] = item;
        }
      }
    }
    const res = await service.roleService.modifyRole(id, _role);
    if (res.ok === 1 && res.nModified !== 0) {
      ctx.body = {
        status: 1,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '修改角色信息失败',
      };
    }
  }
  async delRole() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const res = await service.roleService.deleteRole(id);
    if (res.ok === 1 && res.deletedCount !== 0) {
      ctx.body = {
        status: 1,
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '删除角色信息失败',
      };
    }
  }
}
module.exports = RoleController;
