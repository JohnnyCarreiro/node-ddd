import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Johnny'
  user.email = 'contact@johnnycarreiro.com'
  expect(user.name).toEqual('Johnny')
  expect(user.email).toEqual('contact@johnnycarreiro.com')
})
