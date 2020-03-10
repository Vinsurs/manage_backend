/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571651023928_160';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // security
  config.security = {
    csrf: {
      enable: false,
    },
    // domainWhiteList: [ 'http://localhost:3000' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // egg-mongoose
  config.mongoose = {
    url: 'mongodb://localhost:27017',
    options: {
      user: '',
      pass: '',
      dbName: 'fornode',
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  };
  // file upload
  config.multipart = {
    fileSize: '5mb',
    mode: 'stream',
    fileExtensions: [ '.ico' ],
  };
  return {
    ...config,
    ...userConfig,
  };
};
