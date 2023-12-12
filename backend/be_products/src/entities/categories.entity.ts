import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Categories extends BaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;
}
