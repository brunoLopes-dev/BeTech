// Venda.ts
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from 'App/Models/Cliente'
import Produto from 'App/Models/Produto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number

  @column()
  public produtoId: number

  @column()
  public quantidade: number

  @column()
  public precoUnitario: number

  @column()
  public precoTotal: number

  @column.dateTime({ autoCreate: true })
  public dataHora: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente, { foreignKey: 'clienteId' })
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Produto, { foreignKey: 'produtoId' })
  public produto: BelongsTo<typeof Produto>
}
