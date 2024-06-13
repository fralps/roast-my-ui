import { DateTime } from 'luxon'
import Roastee from '#models/roastee'
import Review from '#models/review'
import ProposalScreenshot from '#models/proposal_screenshot'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'

export default class Proposal extends BaseModel {
  @belongsTo(() => Roastee)
  declare roastee: BelongsTo<typeof Roastee>

  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @hasMany(() => ProposalScreenshot)
  declare proposalScreenshots: HasMany<typeof ProposalScreenshot>

  @column()
  declare roasteeId: number

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare websiteUrl: string

  @column()
  declare roastLimit: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
