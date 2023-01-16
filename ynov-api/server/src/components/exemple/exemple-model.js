import mongoose from "mongoose";

const { Schema } = mongoose

const exempleSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Exemple = mongoose.model('Exemple',exempleSchema)

// Exemple.create({
//     name: 'Test product',
//     description:  'Test',
//     colors: ['black','red','yellow'],
//     price: 100

const findAll = async () => {
    const exemples = await Exemple.find()
    console.log('FIND ALL ==============', exemples)
}

const findById = async () => {
    const exemple = await Exemple.findById('63721a7b043bdbd1e536f8c2')
    console.log('FIND BY ID =========',exemple);
}

const updateById = async () => {

    //Methode 1
    const exemple = await Exemple.findByIdAndUpdate('63721a7b043bdbd1e536f8c2', {name: "Premier élément"})
    console.log('UPADATE BY ID ===========')

//     //Methode 2
// const exemple = await Exemple.findById('63721a7b043bdbd1e536f8c2')
// exemple.name = "Modification"
// exemple.save()

//  //Methode 3
// const exemple = await Exemple.findById('63721a7b043bdbd1e536f8c2')
// exemple.set({
//     name: "Modif avec le set"
//     exemple.save()
// })

findAll()
}

const deleteById = async () => {
    const exemple = await Exemple.findByIdAndDelete('63721a7b043bdbd1e536f8c2')
}

findAll()
findById()
//updateById()
//deleteById()

export default Exemple