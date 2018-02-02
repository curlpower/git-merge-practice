'use strict'

const config = require('../config')

const showFullList = function () {
  return $.ajax({
    url: config.apiOrigin + '/books/',
    method: 'GET'
  })
}

module.exports = {
  showFullList
}
