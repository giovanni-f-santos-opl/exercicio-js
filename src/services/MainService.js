const endpoints = require('../lib/endpoints/Endpoints.js')

/**
 * Class to do the necessary http requests
 */
class MainService {
  /**
   * Get Users
   * @description returns a Promise that, when resolved, returns an Array of Users
   * @returns {Promise<Array<Object>>}
   */
  getUsers() {
    return new Promise((resolve, reject) => {
      fetch(endpoints.users)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro de rede - ${response.status}`)
          }
          return response.json()
        })
        .then((data) => resolve(data))
        .catch((error) => {
          console.error('Erro na requisição:', error)
          reject(false)
        })
    })
  }

  /**
   * Get Posts
   * @description returns a Promise that, when resolved, returns an Array of Posts
   * @returns {Promise<Array<Object>>}
   */
  getPosts() {
    return new Promise((resolve, reject) => {
      fetch(endpoints.posts)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro de rede - ${response.status}`)
          }
          return response.json()
        })
        .then((data) => resolve(data))
        .catch((error) => {
          console.error('Erro na requisição:', error)
          reject(false)
        })
    })
  }
}

module.exports = new MainService()
