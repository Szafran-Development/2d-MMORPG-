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
export class AuthController {
    @Post('/register')
    async register(@Body({ required: true }) body: Record<string, string>) {
        const { email, password } = body

        const isEmailBusy = !!(await User.findOne({
            where: {
                email: email,
            },
        }))

        if (!isEmailBusy) {
            const user = new User()
            user.email = email
            user.password = await User.hashPassword(password)
            await user.save()

            return user
        }
        return 'Istnieje konto z takim adresem email'
    }
}
