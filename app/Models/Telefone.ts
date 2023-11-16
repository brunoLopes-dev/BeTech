// app/Models/Telefone.ts

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from 'App/Models/Cliente'

export default class Telefone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number

  @column()
  public numero: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente, { foreignKey: 'clienteId' })
  public cliente: BelongsTo<typeof Cliente>
}
