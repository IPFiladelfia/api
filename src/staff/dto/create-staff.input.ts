import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { PageStatus, StaffTitle } from 'src/shared/enums';

@InputType()
export class CreateStaffInput {
  @IsOptional()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @Field({ nullable: true })
  description?: string;

  @IsOptional()
  @Field({ nullable: true })
  title?: StaffTitle;

  @IsOptional()
  @IsUrl()
  @Field({ nullable: true })
  thumbnailUrl?: string;

  @IsEnum(PageStatus)
  @IsString()
  @Field({ defaultValue: PageStatus.DRAFT })
  status: PageStatus;
}
