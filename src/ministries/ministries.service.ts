import { Injectable } from '@nestjs/common';
import { CreateMinistryInput } from './dto/create-ministry.input';
import { UpdateMinistryInput } from './dto/update-ministry.input';

@Injectable()
export class MinistriesService {
  create(createMinistryInput: CreateMinistryInput) {
    return 'This action adds a new ministry';
  }

  findAll() {
    return `This action returns all ministries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ministry`;
  }

  update(id: number, updateMinistryInput: UpdateMinistryInput) {
    return `This action updates a #${id} ministry`;
  }

  remove(id: number) {
    return `This action removes a #${id} ministry`;
  }
}
