import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn({name: 'id' })
    id?: number;

    @Column({name: 'title', type: 'varchar'  })
    title: string;

    @Column({ name: 'email', type: 'text' })
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}