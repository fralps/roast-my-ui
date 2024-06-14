import { test } from '@japa/runner'
import Roaster from '#models/roaster'

test.group('Model Roaster', (group) => {
  const subject = new Roaster()

  group.each.setup(async () => {
    subject.fill({
      firstName: 'Larry',
      lastName: 'Cover',
      username: 'larrycover',
      type: 'roaster',
      description: 'I am a roastee',
      email: 'larry.cover@gmail.com',
      password: 'password123',
    })
    await subject.save()
  })

  test('it returns an instance of Roaster', ({ expect }) => {
    expect(subject).toBeInstanceOf(Roaster)
  })
})
