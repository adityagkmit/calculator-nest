import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { Operation } from '../../entities/operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operation])], 
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
