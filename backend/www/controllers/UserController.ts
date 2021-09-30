import {
    JsonController,
    Body,
    Get,
    Post,
    Put,
    Param,
} from 'routing-controllers'
import { User } from '../../database/entity/User'

@JsonController()
export class UserController {
    @Get('/users')
    async getAll(): Promise<User[]> {
        const users = await User.find()
        return users
    }

    @Get('/users/:id')
    async getOne(@Param('id') id: number) {
        const user = await User.findOne(id)
        return user
    }
}
