const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
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
      const userId = req.user.id
      const { songId } = req.body
      const historyEntry = await History.findOne({
        where: {
          UserId: userId,
          SongId: songId
        }
      })
      if (historyEntry) {
        try {
          let viewCount = historyEntry.viewCount
          viewCount++
          await History.update({
            viewCount: viewCount
          },
          {
            where: {
              UserId: userId,
              SongId: songId
            }
          })
          res.send(historyEntry)
        } catch (err) {
          console.log('update error', err)
        }
      } else {
        const historyEntry = await History.create({
          SongId: songId,
          UserId: userId
        })
        res.send(historyEntry)
      }
    } catch (err) {
      res.status(500).send({
        error: 'A server error occurred while trying to create the history entry'
      })
    }
  }
}
