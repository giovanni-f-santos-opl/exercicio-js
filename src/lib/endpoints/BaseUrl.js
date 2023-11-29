/**
 * Base Url
 * @param {string} endpoint the especific endpoint
 * @returns {string} the final url for http request
 */
function BaseUrl(endpoint) {
  return `https://jsonplaceholder.typicode.com/${endpoint}`
}

module.exports = BaseUrl
