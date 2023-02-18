import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { StaffMember } from './staff.entity';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import { isArray } from 'class-validator';

@Resolver(() => StaffMember)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => StaffMember)
  createStaff(
    @Args('createStaffInput') createStaffInput: CreateStaffInput,
  ): Promise<StaffMember> {
    return this.staffService.create(createStaffInput);
  }

  @Query(() => [StaffMember], { name: 'staff' })
  findAll() {
    return this.staffService.findAll();
  }

  @Query(() => StaffMember, { name: 'staff' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.staffService.findOne(id);
  }

  @Mutation(() => StaffMember)
  updateStaff(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation(() => StaffMember)
  removeStaff(@Args('id', { type: () => String }) id: string) {
    return this.staffService.remove(id);
  }
}
