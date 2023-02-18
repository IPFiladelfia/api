import { Module } from '@nestjs/common';
import { MinistriesService } from './ministries.service';
import { MinistriesResolver } from './ministries.resolver';

@Module({
  providers: [MinistriesResolver, MinistriesService]
})
export class MinistriesModule {}
