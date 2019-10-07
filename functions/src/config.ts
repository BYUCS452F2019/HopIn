import {ConnectionOptions, Connection, createConnection, getConnection} from 'typeorm';
import 'reflect-metadata';

export const prod = process.env.NODE_ENV === 'production';

export const config: ConnectionOptions = {
    name: 'HopIn',
    type: 'mysql',
    host: '104.198.252.79',
    port: 3306,
    username: 'root',
    password: 'byucs4522019',
    database: 'Development',
    synchronize: true,
    logging: false,
    entities: [
        'lib/entity/**/*.js'
    ],
    ...(prod && {
        database: 'production',
        logging: false,
        extra: {
            socketPath: '/cloudsql/chrome-duality-187505:us-central1:hopin-instance'
        }
    })

}

export const connect = async () => {
    let connection: Connection;
    try {
        connection = getConnection(config.name);
    } catch (err) {
        connection = await createConnection(config);
    }

    return connection;
}