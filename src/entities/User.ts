import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class User {
	@PrimaryColumn()
	@Column({type: 'uuid'})
	id: string

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', unique: true })
	email: string

	@Column({ type: 'text' })
	password: string
}
