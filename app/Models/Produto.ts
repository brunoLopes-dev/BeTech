// app/Models/Produto.ts

import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: number

  @column()
  public autor: string

  @column()
  public generoLiterario: string

  @column()
  public editora: string

  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ autoCreate: true, columnName: 'deleted_at' })
  public deletedAt: DateTime | null
}
