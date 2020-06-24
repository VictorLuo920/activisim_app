let blmComment = require('../models/blmComment')

module.exports = {
    create,
    index,
    update,
    findBlmComment,
    deleteOne
}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.creator = req.user.name
    req.body.time = req.time
    try {
        await blmComment.create(req.body)
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function index(req, res) {
    const blmComments = await blmComment.find({})
    res.json(blmComments)
}

async function update(req, res) {
    try {
        const updatedBlmComment = await blmComment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedBlmComment)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function findBlmComment(req, res) {
    console.log(req.params.id)
    try {
        const foundBlmComment = await blmComment.findById(req.params.id)
        console.log(foundBlmComment)
        res.status(200).json(foundBlmComment)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    try{
        const deletedBlmComment = await blmComment.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedBlmComment);
    }
    catch(err){
        res.status(500).json(err);
    }
}
