const express = require('express');
const router = express.Router();
const topicsCtrl = require('../../controllers/topics');

router.get('/', topicsCtrl.index);
router.post('/', topicsCtrl.create);


module.exports = router;