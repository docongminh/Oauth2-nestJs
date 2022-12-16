import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  staging: {
    client: 'postgresql',
    connection: {
      database: 'TEST',
      user: 'root',
      password: '123456',
      port: 5400,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'database/migration',
    },
    seeds: {
      directory: 'database/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'TEST',
      user: 'root',
      password: '123456',
      port: 5400,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'database/migration',
    },
    seeds: {
      directory: 'database/seeds',
    },
  },
};

module.exports = config;
