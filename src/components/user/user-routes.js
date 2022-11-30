import Router from "@koa/router";
import * as UserControllers from '#components/user/user-controllers.js'
import { isAuthenticated, isAuthenticatedWithUser } from '#middlewares/jwt-handler.js'

const users = new Router()

users.post('/register', UserControllers.register)
users.post('/login', UserControllers.login)
users.get('/me',isAuthenticatedWithUser, (ctx) => {
    ctx.ok({ message: 'me route', user: ctx.state.user });
});
 users.put('/update', isAuthenticatedWithUser, UserControllers.update)

export default users
