import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChurchService } from './church.service';
import { Church } from './entities/Church.entity';
import { ChurchResolver } from './church.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Church])],
  providers: [ChurchService, ChurchResolver],
})
export class ChurchModule {}
