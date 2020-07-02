import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories') // Nome da tabela
class Category {
  @PrimaryGeneratedColumn('uuid') // Imnforma que é chave primária e seu tipo é uuid
  id: string;

  @Column()
  title: string;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Column({ select: false })
  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default Category;
