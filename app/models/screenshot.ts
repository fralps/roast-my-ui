import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Proposal from '#models/proposal'
import Review from '#models/review'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Screenshot extends BaseModel {
  @belongsTo(() => Proposal)
  declare Proposal: BelongsTo<typeof Proposal>

  @belongsTo(() => Review)
  declare Review: BelongsTo<typeof Review>

  @column({ serializeAs: null })
  declare proposalId: number | null

  @column({ serializeAs: null })
  declare reviewId: number | null

  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare filePath: string

  @column()
  declare fileName: string

  @column({ serializeAs: null })
  declare extname: string

  @column({ serializeAs: null })
  declare type: string

  @column({ serializeAs: null })
  declare size: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}
