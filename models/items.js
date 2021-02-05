
const {Schema, model} = require("mongoose")

const course = new Schema({
    name: {
        type:String,
        required: true,

    },
    price:{
        type:Number,
        required: true
    },
    img:String,
    category:Number,
    userId:{
        type:Schema.Types.ObjectId,
        ref: "User"
    }

})


module.exports = model("Item", course)
