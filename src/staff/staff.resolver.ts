import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { StaffMember } from './entities/staff.entity';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';

@Resolver(() => StaffMember)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => StaffMember)
  createStaff(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.staffService.create(createStaffInput);
  }

  @Query(() => [StaffMember], { name: 'staff' })
  findAll() {
    return this.staffService.findAll();
  }

  @Query(() => StaffMember, { name: 'staff' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.staffService.findOne(id);
  }

  @Mutation(() => StaffMember)
  updateStaff(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation(() => StaffMember)
  removeStaff(@Args('id', { type: () => Int }) id: number) {
    return this.staffService.remove(id);
  }
}
