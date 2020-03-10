'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/upload')(app);
  require('./router/user')(app);
  require('./router/role')(app);
  require('./router/api')(app);
  require('./router/category')(app);
  require('./router/product')(app);
};
