'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async login(user) {
    const _user = await this.ctx.model.UserModel.findOne({
      username: user.username,
      password: user.password,
    });
    if (!_user) {
      return null;
    }
    return _user;
  }
  async register(user) {
    const _user = await this.login(user);
    if (_user) {
      return false;
    }
    // const UserModel = this.ctx.model.UserModel;
    // const User = new UserModel(user);
    // await User.save();
    const res = await this.ctx.model.UserModel.insertMany([ user ]);
    if (res) {
      return true;
    }
  }
  async update(id, data) {
    const res = await this.ctx.model.UserModel.updateOne(
      { _id: id },
      { $set: data }
    );
    return res;
  }
  async remove(id) {
    const res = await this.ctx.model.UserModel.deleteOne({ _id: id });
    return res;
  }
  async find(id) {
    let res;
    if (id) {
      res = await this.ctx.model.UserModel.findOne({
        _id: id,
      });
    } else {
      res = await this.ctx.model.UserModel.find({
        username: {
          $ne: 'admin',
        },
      });
    }
    return res;
  }
}
module.exports = UserService;
