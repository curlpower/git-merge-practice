'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetAllBooks = function (event) {
  event.preventDefault()
  api.showFullList()
    .then(ui.getAllBooksSuccess)
    .catch(ui.getAllBooksFailure)
}

const addHandlers = function () {
  $('#allBooksButton').on('submit', onGetAllBooks)
}

module.exports = {
  addHandlers
}
