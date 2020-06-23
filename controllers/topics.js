const Topic = require('../models/topic')

module.exports = {
    create,
    index,
  };


async function create(req, res) {
    console.log('user: ', req.user)
    try {
      await Topic.create(req.body);
      index(req, res);
    } catch (err) {
      res.json({err});
    }
  }
  
  async function index(req, res) {
    const events = await Topic.find({})
    res.json(events);
  }