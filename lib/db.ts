import mysql from "mysql2/promise";

const hasDbConfig = Boolean(
  process.env.DB_HOST &&
    process.env.DB_PORT &&
    process.env.DB_USER &&
    process.env.DB_PASSWORD &&
    process.env.DB_NAME
);

const pool = hasDbConfig
  ? mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    })
  : null;

const db = {
  query: async (sql: string, params?: unknown[]) => {
    if (!pool) {
      throw new Error("Database is not configured.");
    }

    return await pool.query(sql, params as never[]);
  },
};

export default db;