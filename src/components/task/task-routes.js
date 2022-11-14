import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', (ctx, next) => {
    ctx.body = todos
})

tasks.get('/:id', (ctx) => {

    ctx.body = todos.find(t => t.id === parseInt(ctx.params.id));

});

tasks.post('/', TaskControllers.create)


tasks.put('/:id', TaskControllers.update);

tasks.delete('/:id', TaskControllers.supprimer);


export default tasks

