import { test } from '@japa/runner'
import Proposal from '#models/proposal'

test.group('Model Proposal', (group) => {
  const subject = new Proposal()

  group.each.setup(async () => {
    subject.fill({
      title: 'Proposal title',
      description: 'Proposal description',
      websiteUrl: 'https://example.com',
      roasteeId: 1,
    })
    await subject.save()
  })

  test('it returns an instance of Proposal', ({ expect }) => {
    expect(subject).toBeInstanceOf(Proposal)
  })
})
