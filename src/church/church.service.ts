import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Church } from './entities/Church.entity';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(Church)
    private churchRepository: Repository<Church>,
  ) {}
}
