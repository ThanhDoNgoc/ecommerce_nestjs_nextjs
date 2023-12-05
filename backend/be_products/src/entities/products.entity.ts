import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Categories } from './categories.entity';

@Entity()
export class Products extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  inStock: number;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToMany(() => Categories)
  @JoinTable()
  categories: Categories[];
}
