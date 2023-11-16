// Vendas.ts (migração)
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('cliente_id').unsigned().references('clientes.id').onDelete('CASCADE')
      table.integer('produto_id').unsigned().references('produtos.id').onDelete('CASCADE')
      table.integer('quantidade').notNullable()
      table.decimal('preco_unitario').notNullable()
      table.decimal('preco_total').notNullable()
      table.dateTime('data_hora', { useTz: true }).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
