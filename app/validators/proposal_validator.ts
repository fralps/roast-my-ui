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
