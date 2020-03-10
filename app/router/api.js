'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/getlocation', controller.api.getLocation);
};
