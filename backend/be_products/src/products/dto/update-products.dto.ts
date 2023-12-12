import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({ type: String, required: false })
  readonly name?: string;

  @ApiProperty({ type: Number, required: false })
  readonly price?: number;

  @ApiProperty({ type: String, required: false })
  readonly description?: string;

  @ApiProperty({ type: Number, required: false })
  readonly inStock?: number;

  @ApiProperty({ type: Boolean, required: false })
  readonly isPublic?: boolean;

  @ApiProperty({ type: [String], required: false })
  readonly categoryIds?: string[];
}
