import { DateTime } from 'luxon'
import Proposal from '#models/proposal'
import Roaster from '#models/roaster'
import Screenshot from '#models/screenshot'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'

export default class Review extends BaseModel {
  @belongsTo(() => Proposal)
  declare proposal: BelongsTo<typeof Proposal>

  @hasMany(() => Screenshot)
  declare screenshots: HasMany<typeof Screenshot>

  @column()
  declare proposalId: number

  @belongsTo(() => Roaster)
  declare roaster: BelongsTo<typeof Roaster>

  @column()
  declare roasterId: number

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
