import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ministry {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
