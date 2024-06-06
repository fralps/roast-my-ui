import { DateTime } from 'luxon'
import Roastee from '#models/roastee'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'

export default class RoasteeProposal extends BaseModel {
  @belongsTo(() => Roastee)
  declare roastee: BelongsTo<typeof Roastee>

  @column()
  declare roasteeId: number

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
