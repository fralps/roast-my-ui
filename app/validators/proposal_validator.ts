import vine from '@vinejs/vine'

/**
 * Validates the proposal's creation action
 */
export const createProposalValidator = vine.compile(
  vine.object({
    title: vine.string().trim(),
    description: vine.string(),
    websiteUrl: vine.string().trim(),
    roastLimit: vine.number(),
  })
)

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
