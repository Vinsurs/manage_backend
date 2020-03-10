'use strict';
module.exports = app => {
  const { controller, router } = app;
  router.post('/api/user/login', controller.user.doLogin);
  router.post('/api/user/register', controller.user.doRegister);
  router.post('/api/user/update', controller.user.doUpdate);
  router.post('/api/user/remove', controller.user.doRemove);
  router.get('/api/user/find', controller.user.doFind);
};
