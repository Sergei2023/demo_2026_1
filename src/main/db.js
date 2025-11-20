import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: '111',
    port: 5432,
    database: 'demo_1',
  });

  await client.connect();
  return client;
};