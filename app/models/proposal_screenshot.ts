import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Proposal from '#models/proposal'
import Review from '#models/review'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProposalScreenshot extends BaseModel {
  @belongsTo(() => Proposal)
  declare Proposal: BelongsTo<typeof Proposal>

  @belongsTo(() => Review)
  declare Review: BelongsTo<typeof Review>

  @column()
  declare proposalId: number | null

  @column()
  declare reviewId: number | null

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare filePath: string

  @column()
  declare fileName: string

  @column()
  declare extname: string

  @column()
  declare type: string

  @column()
  declare size: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
