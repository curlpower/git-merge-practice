'use strict'

const config = require('../config')

const showFullList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books/',
    method: 'GET',
    data
  })
}

module.exports = {
  showFullList
}
