const blmComment = require('../models/blmComment')

module.exports = {
    index,
    show, 
    create,
    // update,
    // delete: deleteOne
}

async function index(req, res) {
    const blmComments = await blmComment.find({})
    res.status(200).json(blmComments)
}

async function show(req, res) {
    const blmComment = await blmComment.findById(req.params.id)
    res.status(200).json(blmComment)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const blmComment = await blmComment.create(req.body)
    res.status(201).json(blmComment)
}