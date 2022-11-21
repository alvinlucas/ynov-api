import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.index)

tasks.get('/:id', TaskControllers.indexId);

tasks.post('/', TaskControllers.create)


tasks.put('/:id', TaskControllers.update);

tasks.delete('/:id', TaskControllers.supprimer);


export default tasks

