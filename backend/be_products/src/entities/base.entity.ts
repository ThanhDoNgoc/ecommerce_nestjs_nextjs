import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: Date })
  @Column()
  updatedAt: Date;

  @ApiProperty({ type: String })
  @Column()
  updatedBy: string;
}
