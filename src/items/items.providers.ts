import { DataSource } from 'typeorm';
import { Item } from './entities/item.entity';
import constants from '../constants';

export const itemProviders = [
  {
    provide: constants.ITEM_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Item),
    inject: [constants.DATA_SOURCE],
  },
];
