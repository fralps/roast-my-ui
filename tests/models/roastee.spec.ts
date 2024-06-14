import { test } from '@japa/runner'
import Roastee from '#models/roastee'

test.group('Model Roastee', (group) => {
  const subject = new Roastee()

  group.each.setup(async () => {
    subject.fill({
      firstName: 'Larry',
      lastName: 'Cover',
      username: 'larrycover',
      type: 'roastee',
      description: 'I am a roastee',
      email: 'larry.cover@gmail.com',
      password: 'password123',
    })
    await subject.save()
  })

  test('it returns an instance of Roastee', ({ expect }) => {
    expect(subject).toBeInstanceOf(Roastee)
  })
})
