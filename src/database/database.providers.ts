import { DataSource } from 'typeorm';
import constants from '../constants';

export const databaseProviders = [
  {
    provide: constants.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        // todo: pass to external config - these are false creds
        password: '',
        database: 'test',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
      });

      return dataSource.initialize();
    },
  },
];
