import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Review from '#models/review'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Roaster extends compose(BaseModel, AuthFinder) {
  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare firstName: string | null

  @column()
  declare lastName: string | null

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
