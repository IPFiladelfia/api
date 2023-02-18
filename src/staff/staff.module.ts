import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffResolver } from './staff.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffMember } from './staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffMember])],
  providers: [StaffResolver, StaffService],
})
export class StaffModule {}
