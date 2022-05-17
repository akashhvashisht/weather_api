const mongoose=require('mongoose')
const WeatherSchema=new mongoose.Schema({
    time:{
        type:String,
        required:true
    },
    key:{
        type:String,
        required:true
    },
    q:{
        type:String,
        required:true
    },
    aqi:{
        type:String,
        required:true
    },
    alerts:{
        type:String,
        required:false
    },
    days:{
        type:Number,
        required:false
    }

})
module.exports=mongoose.model('Weather',WeatherSchema)