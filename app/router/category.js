'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/category/get', controller.category.getCategory);
  router.post('/api/category/add', controller.category.addCategory);
  router.post('/api/category/update', controller.category.modifyCategory);
  router.post('/api/category/del', controller.category.delCategory);
};
