'use strict';
const Service = require('egg').Service;
class RoleService extends Service {
  async addRole(role) {
    const Role = this.ctx.model.RoleModel;
    const _role = new Role(role);
    const res = await _role.save();
    return res;
  }
  async modifyRole(id, data) {
    const res = await this.ctx.model.RoleModel.updateOne({ _id: id }, data);
    return res;
  }
  async deleteRole(id) {
    const res = await this.ctx.model.RoleModel.deleteOne({ _id: id });
    return res;
  }
  async getRole(id) {
    let res;
    if (id) {
      res = await this.ctx.model.RoleModel.findById(id);
    } else {
      res = await this.ctx.model.RoleModel.find();
    }
    return res;
  }
}
module.exports = RoleService;
