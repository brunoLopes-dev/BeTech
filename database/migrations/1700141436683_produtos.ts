import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.decimal('preco', 10, 2).notNullable()
      table.string('autor').notNullable()
      table.string('genero_literario').notNullable()
      table.string('editora').notNullable()
      table.text('descricao').notNullable()
      table.dateTime('deleted_at')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
