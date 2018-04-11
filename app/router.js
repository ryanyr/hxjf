'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.vote);
  router.get('/vote', controller.home.vote);
  router.post('/vote', controller.home.votepost);
  router.get('/result', controller.home.result);
};
