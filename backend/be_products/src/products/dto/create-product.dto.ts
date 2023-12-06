export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly inStock: number;
  readonly isPublic: boolean;
  readonly categoryIds: string[];
}
