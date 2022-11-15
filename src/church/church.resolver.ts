import { Query, Resolver } from '@nestjs/graphql';
import { Church } from './entities/Church.entity';

@Resolver(() => Church)
export class ChurchResolver {
  @Query(() => [Church])
  async findAllChurches(): Promise<Church[]> {
    return [];
  }
}
