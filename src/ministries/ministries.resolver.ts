import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MinistriesService } from './ministries.service';
import { Ministry } from './entities/ministry.entity';
import { CreateMinistryInput } from './dto/create-ministry.input';
import { UpdateMinistryInput } from './dto/update-ministry.input';

@Resolver(() => Ministry)
export class MinistriesResolver {
  constructor(private readonly ministriesService: MinistriesService) {}

  @Mutation(() => Ministry)
  createMinistry(@Args('createMinistryInput') createMinistryInput: CreateMinistryInput) {
    return this.ministriesService.create(createMinistryInput);
  }

  @Query(() => [Ministry], { name: 'ministries' })
  findAll() {
    return this.ministriesService.findAll();
  }

  @Query(() => Ministry, { name: 'ministry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ministriesService.findOne(id);
  }

  @Mutation(() => Ministry)
  updateMinistry(@Args('updateMinistryInput') updateMinistryInput: UpdateMinistryInput) {
    return this.ministriesService.update(updateMinistryInput.id, updateMinistryInput);
  }

  @Mutation(() => Ministry)
  removeMinistry(@Args('id', { type: () => Int }) id: number) {
    return this.ministriesService.remove(id);
  }
}
