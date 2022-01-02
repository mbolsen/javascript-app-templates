var controller = require('../controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.templateMessages.get);

router.post('/messages', controller.templateMessages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);

module.exports = router;