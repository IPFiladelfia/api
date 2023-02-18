import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMinistryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
