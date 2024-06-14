import { test } from '@japa/runner'
import Review from '#models/review'

test.group('Model Proposal', (group) => {
  const subject = new Review()

  group.each.setup(async () => {
    subject.fill({
      title: 'Proposal title',
      description: 'Proposal description',
      proposalId: 1,
      roasterId: 1,
    })
    await subject.save()
  })

  test('it returns an instance of Review', ({ expect }) => {
    expect(subject).toBeInstanceOf(Review)
  })
})
