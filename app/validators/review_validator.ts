import vine from '@vinejs/vine'

/**
 * Validates the review's creation action
 */
export const createReviewValidator = vine.compile(
  vine.object({
    title: vine.string().trim(),
    description: vine.string(),
  })
)
