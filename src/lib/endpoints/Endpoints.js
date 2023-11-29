const BaseUrl = require('./BaseUrl.js')

/**
 * Endpoints List
 * @type {Object}
 */
const endpoints = {
  users: BaseUrl('users'),
  posts: BaseUrl('posts'),
}

module.exports = endpoints
