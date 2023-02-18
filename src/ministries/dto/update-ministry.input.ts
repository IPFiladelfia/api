import { CreateMinistryInput } from './create-ministry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMinistryInput extends PartialType(CreateMinistryInput) {
  @Field(() => Int)
  id: number;
}
