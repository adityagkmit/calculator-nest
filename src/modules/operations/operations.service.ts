import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operation } from '../../entities/operation.entity';
import { CreateOperationDto } from './dto/create-operation.dto';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private readonly operationRepository: Repository<Operation>,
  ) {}

  async create(createOperationDto: CreateOperationDto) {
    const { operand1, operand2, operator, email } = createOperationDto;
    let result: number;

    switch (operator) {
      case 'ADD':
        result = operand1 + operand2;
        break;
      case 'SUB':
        result = operand1 - operand2;
        break;
      case 'MUL':
        result = operand1 * operand2;
        break;
      case 'DIV':
        if (operand2 === 0)
          throw new BadRequestException('Cannot divide by zero');
        result = operand1 / operand2;
        break;
      default:
        throw new BadRequestException('Invalid operator');
    }

    const operation = this.operationRepository.create({
      operand1,
      operand2,
      operator,
      result,
      email,
    });
    return await this.operationRepository.save(operation);
  }

  async findAll(email: string) {
    return await this.operationRepository.find({ where: { email } });
  }

  async removeById(id: number) {
    const deleteResult = await this.operationRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException('History record not found');
    }
    return { message: 'History cleared' };
  }

  async clearHistory(email: string) {
    await this.operationRepository.delete({ email });
    return { message: 'History reset' };
  }
}
