import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createRoasterValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine
      .string()
      .minLength(8)
      .confirmed({
        confirmationField: 'passwordConfirmation',
      })
      .trim(),
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    description: vine.string(),
    type: vine.string().in(['roaster']).trim(),
    username: vine.string().trim(),
  })
)

export const createRoasteeValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine
      .string()
      .minLength(8)
      .confirmed({
        confirmationField: 'passwordConfirmation',
      })
      .trim(),
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    description: vine.string(),
    type: vine.string().in(['roastee']).trim(),
    username: vine.string().trim(),
  })
)

export const avatarValidator = vine.compile(
  vine.object({
    avatar: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
  })
)
