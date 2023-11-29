const MainService = require('./services/MainService.js')

/**
 * Main Function
 * @returns {Array<Object>} the array of the complete Users with their respective Posts
 */
async function mainFunc() {
  const users = await MainService.getUsers()
  const posts = await MainService.getPosts()

  posts &&
    posts.map((post) => {
      const user = users && users.find((user) => user.id === post.userId)
      !user.posts && (user.posts = [])
      user.posts.push(post)
    })
  return users
}

module.exports = { mainFunc }
