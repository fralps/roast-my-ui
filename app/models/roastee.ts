import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import RoasteeProposal from '#models/roastee_proposal'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Roastee extends compose(BaseModel, AuthFinder) {
  @hasMany(() => RoasteeProposal)
  declare roastee_proposals: HasMany<typeof RoasteeProposal>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare first_name: string | null

  @column()
  declare last_name: string | null

  @column()
  declare description: string | null

  @column()
  declare avatar: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
