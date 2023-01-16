import Router from "@koa/router";
import * as UserControllers from '#components/user/user-controllers.js'
import { isAuthenticated, isAuthenticatedWithUser } from '#middlewares/jwt-handler.js'

const users = new Router()

users.use(['/me','/update'],isAuthenticatedWithUser)


users.post('/register', UserControllers.register)
users.post('/login', UserControllers.login)
users.get('/me',isAuthenticatedWithUser, (ctx) => {
    ctx.ok(ctx.state.user);
});
users.put('/update', isAuthenticatedWithUser, UserControllers.update)



export default users
