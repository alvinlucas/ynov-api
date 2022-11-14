import Router from '@koa/router'

const exemples = new Router()

const todos = [
    {
        id: 1,
        title: 'Patates'
    },
    {
        id: 2,
        title: 'Pommes'
    },
    {
        id: 3,
        title: 'Cerise'
    }
]

exemples.get('/', (ctx, next) => {
    ctx.body = todos
})

exemples.get('/:id', (ctx) => {

    ctx.body = todos.find(t => t.id === parseInt(ctx.params.id));

});

exemples.post('/', (ctx) => {
    const newTask = {
        id : todos.length +1,
        title: ctx.request.body
    }
    todos.push(newTask)
    console.log(todos)
    ctx.status = 200
})

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