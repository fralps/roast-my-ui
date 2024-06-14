import { test } from '@japa/runner'
import Screenshot from '#models/screenshot'

test.group('Model Screenshot', (group) => {
  const subject = new Screenshot()

  group.each.setup(async () => {
    subject.fill({
      filePath: 'path/to/file',
      fileName: 'file.png',
      extname: 'png',
      type: 'image/png',
      size: '1024',
    })
    await subject.save()
  })

  test('it returns an instance of Screenshot', ({ expect }) => {
    expect(subject).toBeInstanceOf(Screenshot)
  })
})
