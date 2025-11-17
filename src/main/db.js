import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: '142',
    host: 'localhost',
    port: '5432',
    database: 'demo_2026_2 (before backup)',
  });

  await client.connect();
  return client;
};