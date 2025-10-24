// migrations/migration.js
import fs from "fs";
import path from "path";
import { pool } from "./db.js";

const runMigration = async () => {
  try {
    const __dirname = path.resolve();
    const sql = fs.readFileSync(path.join(__dirname, "migrations", "migration.sql"), "utf-8");

    await pool.query(sql);
    console.log("✅ Migration completed successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Migration failed:", err);
    process.exit(1);
  }
};

runMigration();
