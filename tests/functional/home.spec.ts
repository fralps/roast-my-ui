import { test } from '@japa/runner'

// GET /home page
test.group('#GET /home', (): void => {
  test('returns correct component', async ({ client }) => {
    const response = await client.get('/').withInertia()

    response.assertInertiaComponent('home')
  })

  test('returns 200 status', async ({ client }) => {
    const response = await client.get('/').withInertia()

    response.assertStatus(200)
  })
})
