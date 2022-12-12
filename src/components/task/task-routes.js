import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'
import { isAuthenticated, isAuthenticatedWithUser } from '#middlewares/jwt-handler.js'

const tasks = new Router()
tasks.use(['/','/:id'],isAuthenticatedWithUser)


tasks.get('/', TaskControllers.index)
tasks.get('/protected',isAuthenticated, (ctx) => {
    ctx.ok({ message: 'Protected route', user: ctx.state.user });
});
tasks.get('/:id', TaskControllers.indexId);
tasks.post('/', TaskControllers.create)
tasks.put('/:id', TaskControllers.update);
tasks.delete('/:id', TaskControllers.supprimer);



export default tasks

