const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.fetchSongs)

  app.post('/songs',
    SongsController.post)

  app.get('/songs/:songId',
    SongsController.fetchSong)

  app.put('/songs/:songId',
    SongsController.put)
}
