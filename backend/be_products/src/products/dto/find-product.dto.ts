import { ApiProperty } from '@nestjs/swagger';

export class FindProductDto {
  @ApiProperty({ type: Number, required: false })
  readonly page?: number;

  @ApiProperty({ type: Number, required: false })
  readonly limit?: number;

  @ApiProperty({ type: Number, required: false })
  readonly searchKey?: number;

  @ApiProperty({ type: String, required: false })
  readonly categoryIds?: string;
}
