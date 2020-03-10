'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/role/add', controller.role.setRole);
  router.post('/api/role/del', controller.role.delRole);
  router.post('/api/role/modify', controller.role.modifyRole);
  router.get('/api/role/find', controller.role.getRole);
};
