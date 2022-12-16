import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //   await knex('table_name').del();

  // Inserts seed entries
  await knex('User').insert([
    { id: 1, provider: 'google', providerId: '001', username: 'docongminh' },
  ]);
}
