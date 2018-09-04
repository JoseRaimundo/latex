'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller');

router.post('/login', controller.login);
router.get('/:username', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router