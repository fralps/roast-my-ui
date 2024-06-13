import vine from '@vinejs/vine'

/**
 * Validates the proposal's screenshots
 */
export const screenshotsValidator = vine.compile(
  vine.object({
    screenshots: vine.array(
      vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg'],
      })
    ),
  })
)
