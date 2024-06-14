import { test } from '@japa/runner'
import Roastee from '#models/roastee'
import Roaster from '#models/roaster'
import { RoasteeFactory } from '#database/factories/roastee_factory'
import { RoasterFactory } from '#database/factories/roaster_factory'

// GET /auth/sessions/create page
test.group('#GET /auth/sessions/create', (): void => {
  test('returns correct component', async ({ client }) => {
    const response = await client.get('/auth/sessions/create').withInertia()

    response.assertInertiaComponent('login')
  })

  test('returns 200 status', async ({ client }) => {
    const response = await client.get('/auth/sessions/create').withInertia()

    response.assertStatus(200)
  })
})

// POST /auth/sessions for roastee user
test.group('#POST /auth/sessions for roastee user', (group): void => {
  let roastee: Roastee

  group.each.setup(async (): Promise<void> => {
    roastee = await RoasteeFactory.create()
  })

  test('returns 200 status', async ({ client }) => {
    const response = await client.post('/auth/sessions').json({
      email: roastee.email,
      password: 'password',
    })
    response.assertStatus(200)
  })

  test('redirects to roastee proposals index', async ({ client }) => {
    const response = await client.post('/auth/sessions').withInertia().json({
      email: roastee.email,
      password: 'password',
    }).withCsrfToken()

    response.assertRedirectsTo('/roastee/proposals')
  })
})

// POST /auth/sessions for roaster user
test.group('#POST /auth/sessions for roaster user', (group): void => {
  let roaster: Roaster

  group.each.setup(async (): Promise<void> => {
    roaster = await RoasterFactory.create()
  })

  test('returns 200 status', async ({ client }) => {
    const response = await client.post('/auth/sessions').json({
      email: roaster.email,
      password: 'password',
    })
    response.assertStatus(200)
  })

  test('redirects to roastee proposals index', async ({ client }) => {
    const response = await client.post('/auth/sessions').withInertia().json({
      email: roaster.email,
      password: 'password',
    }).withCsrfToken()

    response.assertRedirectsTo('/proposals')
  })
})
