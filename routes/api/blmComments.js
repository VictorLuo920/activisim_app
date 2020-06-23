const express = require('express')
const router = express.Router()
const blmCommentsCtrl = require('../../controllers/blmComments')

router.get('/', blmCommentsCtrl.index)
// router.get('/:id', blmCommentsCtrl.show)

router.use(require('../../config/auth'))

router.post('/', checkAuth, blmCommentsCtrl.create)
router.put('/:id', checkAuth, blmCommentsCtrl.update)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router