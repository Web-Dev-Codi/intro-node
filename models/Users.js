import mongoose, {Schema} from 'mongoose'



const UserSchema = new Schema({
    first_name : String,
    last_name : String,
    passion : {
        type : String,
    }
})

export default mongoose.model('User', UserSchema)