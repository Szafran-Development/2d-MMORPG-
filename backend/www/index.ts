import * as express from 'express'
import { createExpressServer } from 'routing-controllers'
import { UserController } from './controllers/UserController'

const app = createExpressServer({
    controllers: [UserController],
})

app.listen(3000, () => {
    console.log('Serwer www wystartował')
})
