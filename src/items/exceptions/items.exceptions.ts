import { Item } from '../entities/item.entity';


export class ItemException extends Error {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class ItemNotFoundException extends ItemException {
  constructor(id: number) {
    super(`Item with ID [${id}] not found`);
  }
}