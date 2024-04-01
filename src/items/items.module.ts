import { Module } from '@nestjs/common';
import { ItemsService } from './services/items.service';
import { ItemsController } from './controllers/items.controller';
import { DatabaseModule } from '../database/database.module';
import { itemProviders } from './items.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [
    ...itemProviders,
    ItemsService
  ],
})

export class ItemsModule {}
