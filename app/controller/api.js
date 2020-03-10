'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async getLocation() {
    const { ctx } = this;
    ctx.body = await ctx.curl('http://39.97.33.178/api/getlocation', {
      method: 'GET',
      dataType: 'json',
    });
  }
}

module.exports = ApiController;
