'use strict'

const showBooksTemplate = require('../templates/get-books.handlebars')

const getAllBooksSuccess = function (data) {
  $('.book-content').html('')
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.book-content').append(showBooksHtml)
}

const getAllBooksFailure = function (error) {
  console.error(error)
}

module.exports = {
  getAllBooksSuccess,
  getAllBooksFailure
}
