import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { joinArrayWithAnd } from 'src/shared/utils';
import { Repository } from 'typeorm';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import { StaffMember } from './staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(StaffMember)
    private staffRepository: Repository<StaffMember>,
  ) {}

  async create(createStaffInput: CreateStaffInput) {
    const { name, status, description, thumbnailUrl, title } = createStaffInput;
    const staffMember = this.staffRepository.create({
      name,
      status,
      description,
      thumbnailUrl,
      title,
    });

    await this.staffRepository.save(staffMember);
    return staffMember;
  }

  findAll() {
    return this.staffRepository.find();
  }

  findOne(id: string) {
    return this.staffRepository.findOneByOrFail({ id });
  }

  update(id: string, updateStaffInput: UpdateStaffInput) {
    const staffMember = this.findOne(id);
    if (!staffMember) throw new NotFoundException('Membro não encontrado');

    const objectToUpdate = {};

    Object.keys(updateStaffInput).forEach((key) => {
      objectToUpdate[key] = updateStaffInput[key];
    });

    return this.staffRepository.update({ id }, objectToUpdate);
  }

  async remove(id: string) {
    const deleted = await this.staffRepository.delete({ id });
    if (deleted.affected === 0)
      throw new NotFoundException('Membro não encontrado');
    return `Membro ${id} deletado com sucesso`;
  }
}
