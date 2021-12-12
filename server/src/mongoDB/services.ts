import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'TriviaQuiz';

const connection = async () => {
    await client.connect();
    console.log('connected successfully to mongodb server');
    const db = client.db(dbName);
    return db;
};

export const activateConnection = async () => {
    try {
        const db = await connection();
        return db;
    } catch {
        console.error;
    } finally {
        () => client.close();
    }
};
