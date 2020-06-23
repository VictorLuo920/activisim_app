let blmComment = require('../models/blmComment')

module.exports = {
    create,
    index,
    // update,
    // findblmComment,
    // deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.creator = req.user.name
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

// async function update(req, res) {
//     try {
//         const updatedblmComment = await blmComment.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.status(200).json(updatedDanaPost)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

// async function findblmComment(req, res) {
//     console.log(req.params.id)
//     try {
//         const foundblmComment = await blmComment.findById(req.params.id)
//         console.log(foundblmComment)
//         res.status(200).json(foundblmComment)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }


// async function deleteOne(req, res) {
//     try{
//         const deletedblmComment = await blmComment.findByIdAndRemove(req.params.id);
//         res.status(200).json(deletedblmComment);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }