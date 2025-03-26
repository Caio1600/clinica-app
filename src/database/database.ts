import { openDatabaseSync } from 'expo-sqlite';

const db = openDatabaseSync('users.db');

export function createTable() {
    db.execAsync(
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );`
    ).catch(error => console.error('Erro ao criar tabela:', error));
}

export function insertUser(email: string, password: string): Promise<void> {
    return db.runAsync(
        `INSERT INTO users (email, password) VALUES (?, ?);`,
        [email, password]
    )
    .then(() => console.log('Usuário inserido com sucesso!'))
    .catch(error => console.error('Erro ao inserir usuário:', error));
}


export async function getUser(email: string, password: string): Promise<boolean> {
    try {
        const result = await db.getAllAsync(
            `SELECT * FROM users WHERE email = ? AND password = ?;`,
            [email, password]
        );
        return result.length > 0;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return false;
    }
}

export default db;
