import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../orm-config';
import { OperationsModule } from './modules/operations/operations.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), OperationsModule],
})
export class AppModule {}
