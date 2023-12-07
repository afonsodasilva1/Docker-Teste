import { randomUUID } from 'crypto'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('user')
export class User {
	@PrimaryColumn('text', {default: randomUUID()})
	id: string

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', unique: true })
	email: string

	@Column({ type: 'text' })
	password: string
}
