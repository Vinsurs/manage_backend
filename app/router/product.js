'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/product/get', controller.product.getProduct);
  router.post('/api/product/add', controller.product.addProduct);
  router.post('/api/product/update', controller.product.modifyProduct);
  router.post('/api/product/del', controller.product.delProduct);
};
