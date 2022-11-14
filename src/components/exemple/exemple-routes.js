import Router from '@koa/router'
import * as ExempleControllers from '#components/exemple/exemple-controllers.js'

const exemples = new Router()

exemples.get('/', ExempleControllers.index)

exemples.get('/', (ctx) => {
    ctx.body = todos
})

exemples.get('/:id', (ctx) => {

    ctx.body = todos.find(t => t.id === parseInt(ctx.params.id));

});

exemples.post('/', ExempleControllers.create)

exemples.put('/:id', (ctx) => {

    const task = todos.find(t => parseInt(ctx.params.id) === t.id);
    task.title = ctx.request.body.title
    ctx.body = todos

});

exemples.delete('/:id', (ctx) => {

    const updatedTodos = todos.filter(t => parseInt(ctx.params.id) !== t.id)
    ctx.body = updatedTodos

});


export default exemples