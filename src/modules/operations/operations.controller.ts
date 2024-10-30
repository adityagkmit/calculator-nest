import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  async create(
    @Body() createOperationDto: CreateOperationDto,
    @Headers('email') email: string,
  ) {
    if (!email) throw new BadRequestException('Email header is required');
    return this.operationsService.create({ ...createOperationDto, email });
  }

  @Get()
  async findAll(@Headers('email') email: string) {
    if (!email) throw new BadRequestException('Email header is required');
    return this.operationsService.findAll(email);
  }

  @Delete(':id')
  async removeById(@Param('id') id: string) {
    return this.operationsService.removeById(Number(id));
  }

  @Delete()
  async clearHistory(@Headers('email') email: string) {
    if (!email) throw new BadRequestException('Email header is required');
    return this.operationsService.clearHistory(email);
  }
}
