'use strict';
const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
class UploadController extends Controller {
  // handle upload file
  async handleImg() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename =
      Date.now() + path.extname(stream.filename).toLocaleLowerCase();
    const filepath = path.join(
      this.config.baseDir,
      'app/public/uploads',
      filename
    );
    const writeStream = fs.createWriteStream(filepath);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      status: 1,
      data: {
        filename,
        url: 'http://127.0.0.1:7001/public/uploads/' + filename,
      },
    };
  }
  // handle delete file
  async handleImgDel() {
    const { ctx } = this;
    const { filename } = ctx.request.body;
    const filepath = path.join(
      this.config.baseDir,
      'app/public/uploads',
      filename
    );
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    ctx.body = {
      status: 1,
      msg: '删除文件成功',
    };
  }
}
module.exports = UploadController;
