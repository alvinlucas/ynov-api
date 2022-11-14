import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.index)

tasks.get('/', (ctx) => {
    ctx.body = todos
})

tasks.get('/:id', (ctx) => {

    ctx.body = todos.find(t => t.id === parseInt(ctx.params.id));

});

tasks.post('/', TaskControllers.create)

tasks.put('/:id', (ctx) => {

    const task = todos.find(t => parseInt(ctx.params.id) === t.id);
    task.title = ctx.request.body.title
    ctx.body = todos

});

tasks.delete('/:id', (ctx) => {

    const updatedTodos = todos.filter(t => parseInt(ctx.params.id) !== t.id)
    ctx.body = updatedTodos

});


export default tasks