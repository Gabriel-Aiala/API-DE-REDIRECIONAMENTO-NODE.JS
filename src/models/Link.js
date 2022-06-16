import mongoose from 'mongoose'
const linkSchema = new mongoose.Schema({
    id :{type:String},
    link :{type:String , required:true},
    
})

const links = mongoose.model('links',linkSchema)

export default links