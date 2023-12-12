import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ type: String })
  readonly name: string;

  @ApiProperty({ type: Number })
  readonly price: number;

  @ApiProperty({ type: String })
  readonly description: string;

  @ApiProperty({ type: Number })
  readonly inStock: number;

  @ApiProperty({ type: Boolean })
  readonly isPublic: boolean;

  @ApiProperty({ type: [String] })
  readonly categoryIds: string[];
}
