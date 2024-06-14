import { test } from '@japa/runner'
import Roaster from '#models/roaster'
import { RoasterFactory } from '#database/factories/roaster_factory'

// GET /proposals page when authenticated
test.group('#GET /proposals when authenticated', (group): void => {
  let roaster: Roaster

  group.each.setup(async (): Promise<void> => {
    roaster = await RoasterFactory.create()
  })

  test('returns correct component', async ({ client }) => {
    const response = await client.get('/proposals').withInertia().withCsrfToken().loginAs(roaster)

    response.assertInertiaComponent('proposals/index')
  })

  test('returns 200 status', async ({ client }) => {
    const response = await client.get('/').withInertia().withCsrfToken().loginAs(roaster)

    response.assertStatus(200)
  })
})

// GET /proposals page when unauthenticated
test.group('#GET /proposals when unauthenticated', (): void => {
  test('returns correct component', async ({ client }) => {
    const response = await client.get('/proposals').withInertia().withCsrfToken()

    response.assertInertiaComponent('login')
  })
})
