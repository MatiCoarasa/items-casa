import { ArgumentsHost, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { ItemException, ItemNotFoundException } from '../exceptions/items.exceptions';
import { Response } from 'express';

const logger = new Logger();

export class ItemsExceptionsFilter implements ExceptionFilter {
  catch(exception: ItemException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let statusCode;
    if (exception instanceof ItemNotFoundException) {
      statusCode = HttpStatus.NOT_FOUND;
    } else {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Unhandled ItemsException", exception.stack);
    }

    response
      .status(statusCode)
      .json({
        timestamp: new Date().toISOString(),
        message: exception.message,
      });
  }

}