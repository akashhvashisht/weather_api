const mongoose=require('mongoose')
const ForecastWeatherSchema=new mongoose.Schema({
    sunrise:{
        type:String,
       
        required:true
    },
    sunset:{
        type:String,
        
        required:true
    },
    moonrise:{
        type:String,
        
        required:true
    },
    moonset:{
        type:String,
        
        required:true
    },
    moon_phase:{
        type:String,
        
        required:true
    },
    moon_illumination:{
        type:String,
        
        required:true
    }
})
module.exports=mongoose.model('ForecastWeather',ForecastWeatherSchema)