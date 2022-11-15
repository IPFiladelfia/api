import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChurchService } from './church.service';
import { Church } from './entities/Church.entity';
import { ChurchController } from './church.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Church])],
  providers: [ChurchService],
  controllers: [ChurchController],
})
export class ChurchModule {}
