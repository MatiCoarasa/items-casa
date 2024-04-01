import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dtos/create-item.dto';
import { UpdateItemDto } from '../dtos/update-item.dto';
import constants from '../../constants';
import { Repository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { ItemNotFoundException } from '../exceptions/items.exceptions';

@Injectable()
export class ItemsService {

  constructor(
    @Inject(constants.ITEM_REPOSITORY)
    private itemsRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemDto);
    return this.itemsRepository.save(newItem);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.find();
  }

  async findOne(id: number) {
    return await this.itemsRepository.findOne({ where: { id }});
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const updateResult = await this.itemsRepository.update(id, updateItemDto);
    if (updateResult["affected"] === 0) throw new ItemNotFoundException(id);

    return this.findOne(id);
  }

  async remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
