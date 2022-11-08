import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

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

router.get('/todos', (ctx, next) => {
    ctx.body = todos
})

router.get('/todos/:id', (ctx) => {

    ctx.body = todos.find(t => t.id === parseInt(ctx.params.id));

});

router.post('/todos', (ctx) => {
    const newTask = {
        id : todos.length +1,
        title: ctx.request.body
    }
    todos.push(newTask)
    console.log(todos)
    ctx.status = 200
})


// app.use(async (ctx) => {
//     ctx.body = { id: 1, product: "iphone"}
//     console.log(ctx)
// })

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())
app.listen(process.env.PORT, () => console.log(`Server listening to port: ${process.env.PORT}`))