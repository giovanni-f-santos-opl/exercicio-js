const MainService = require('./MainService')

test('the data is an array of Users', async () => {
  const dataType = (await MainService.getUsers()).constructor.name
  expect(dataType).toMatch('Array')
})

test('the data is an array of Posts', async () => {
  expect(Array.isArray(await MainService.getPosts())).toBe(true)
})
