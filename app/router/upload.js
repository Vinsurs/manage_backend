'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/uploadImg', controller.upload.handleImg);
  router.post('/api/delUploadImg', controller.upload.handleImgDel);
};
