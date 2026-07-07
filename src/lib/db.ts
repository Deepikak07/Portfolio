import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

let dbInstance: any = null;

export async function openDb() {
  if (dbInstance) {
    return dbInstance;
  }

  const dbPath = path.join(process.cwd(), 'dreamday.sqlite');
  
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  // Initialize tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      service TEXT NOT NULL,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS stats (
      id INTEGER PRIMARY KEY,
      active_projects INTEGER DEFAULT 0,
      completed_events INTEGER DEFAULT 0,
      happy_clients INTEGER DEFAULT 0
    );
  `);

  // Insert default stats if empty
  const stats = await db.get('SELECT * FROM stats WHERE id = 1');
  if (!stats) {
    await db.run('INSERT INTO stats (id, active_projects, completed_events, happy_clients) VALUES (1, 12, 148, 200)');
  }

  dbInstance = db;
  return db;
}
