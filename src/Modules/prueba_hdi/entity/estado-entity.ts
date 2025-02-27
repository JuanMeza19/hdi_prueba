import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('tb_estados')
@Unique(['nombre'])
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 10, nullable: true })
  abreviatura: string;
}
