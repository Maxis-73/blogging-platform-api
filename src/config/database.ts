import mysql2, { ConnectionOptions, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import "dotenv/config"

const config: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
}

const pool = mysql2.createPool(config)

class Database {
  async query<T extends RowDataPacket[] | ResultSetHeader>(sql: string, values: any = null) {
    const conn = await pool.getConnection()
    try {
      const [results] = await conn.query(sql, values)
      return results as T
    } finally {
      conn.release()
    }
  }
}

export default new Database()