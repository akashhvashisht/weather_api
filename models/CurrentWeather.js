const mongoose=require('mongoose')
const CurrentWeatherSchema=new mongoose.Schema({
    name:{
        type:String,
       
        required:true
        
    },
    region:{
        type:String,
        
        required:true
    },
    country:{
        type:String,
      
        required:true
    },
    lat:{
        type:String,
       
        required:true
    },
    lon:{
        type:String,
        
        required:true
    },
    tz_id:{
        type:String,
      
        required:true
    },
    localtime:{
        type:String,
       
        required:true
    }
})
module.exports=mongoose.model('CurrentWeather',CurrentWeatherSchema)