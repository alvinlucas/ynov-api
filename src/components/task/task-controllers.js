import Task from "./task-model.js";
import Joi from "joi";

export async function index (ctx){
    try{
        const user = ctx.state.user;
        // ctx.body = await Task.findByUserId(user._id);
        ctx.body = await Task.find({ user : user._id});
    } catch (e){
        ctx.badRequest ({ message: e.message})
    }
}
export async function indexId (ctx){
    try {
        ctx.body = await Task.findById(ctx.params.id)
    }    catch (err) {
        ctx.badRequest({message: err.message});
    }
}

export async function create (ctx){
    try{
    const taskValidationSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        type: Joi.string().required(),
        date: Joi.date().timestamp(),
        list: Joi.string().required()
    })
    const {error} = taskValidationSchema.validate(ctx.request.body)
    if(error){ throw new Error(error)
    ctx.body = "Works"
    }else{
        ctx.body = await Task.create({...ctx.request.body, user : ctx.state.user._id})
    }
    } catch (e){
        ctx.badRequest ({ message: e.message})
    }
}
export async function update (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            type: Joi.string().required(),
            date: Joi.date().timestamp().optional()
        })
       
        const {error} = taskValidationSchema.validate(ctx.request.body);
        if(error){
            throw new Error(error.message)
        }else{
            ctx.body = await Task.findByIdAndUpdate(ctx.params.id, ctx.request.body, { runValidators: true, new: true });
        };
        ctx.body = await Task.find({});
    }
    catch (err) {
        ctx.badRequest({message: err.message});
    }
}
export async function supprimer (ctx) {
    try {
        ctx.body = await Task.findByIdAndDelete(ctx.params.id);
    }
    catch (err) {
        ctx.badRequest({message: err.message});
    }
}
export async function getAllByList (ctx) {

    try {

        if(!ctx.params.listId) throw new Error('No id supplied')

        const tasks = await TaskModel.findByListId(ctx.params.listId)

        ctx.ok(tasks)

    } catch (e) {

        ctx.badRequest({ message: e.message })

    }

}
