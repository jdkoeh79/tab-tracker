const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(historyEntry => historyEntry.toJSON())
        .map(historyEntry => _.extend(
          {},
          historyEntry.Song,
          historyEntry
        ))
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'A server error occurred while trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      const historyEntry = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(historyEntry)
    } catch (err) {
      res.status(500).send({
        error: 'A server error occurred while trying to create the history entry'
      })
    }
  }
}
