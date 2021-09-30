import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { IsEmail, Length } from 'class-validator'
import bcrypt from 'bcryptjs'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsEmail()
    email: string

    @Column()
    @Length(8)
    password: string

    static async hashPassword(password: string) {
        return await bcrypt.hash(password, 8)
    }

    static async checkIfPasswordIsValid(passwordToCheck: string, hash: string) {
        return await bcrypt.compare(passwordToCheck, hash)
    }
}
