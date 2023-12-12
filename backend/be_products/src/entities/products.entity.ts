import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Categories } from './categories.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Products extends BaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @ApiProperty({ type: Number })
  @Column()
  price: number;

  @ApiProperty({ type: String })
  @Column()
  description: string;

  @ApiProperty({ type: Number })
  @Column()
  inStock: number;

  @ApiProperty({ type: Boolean })
  @Column({ default: false })
  isPublic: boolean;

  @ApiProperty({ type: [Categories] })
  @ManyToMany(() => Categories)
  @JoinTable()
  categories: Categories[];
}
