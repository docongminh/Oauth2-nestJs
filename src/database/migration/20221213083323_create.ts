import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User', (table) => {
    table.increments('id').primary();
    table.string('provider');
    table.string('providerId');
    table.string('username');
    table.string('name').nullable();
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('User');
}
