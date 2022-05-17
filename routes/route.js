const superagent=require('superagent')
const express=require('express')
const router=express.Router()
const weather=require('../models/Weather')
const currentWeather=require('../models/CurrentWeather')
const forecastWeather=require('../models/ForecastWeather')
// @desc Current Api
router.get('/current', (req,response)=>{
superagent.get('http://api.weatherapi.com/v1/current.json').query({key:req.query.key,q:req.query.q,aqi:req.query.aqi}).end(async(err,res)=>{
if(err){    
return console.log(err);}
 const newWeather={
     time:"current",
     key:req.query.key,
     q:req.query.q,
     aqi:req.query.aqi
 }
 let savedWeather=weather.create(newWeather)
const result=await currentWeatherMapper(res.body.location)
console.log(result)
response.send(result)
// response.send(res.body.location)
})})

// @desc Forecast Api

router.get('/forecast',(req,response)=>{
    superagent.get('http://api.weatherapi.com/v1/forecast.json').query({key:req.query.key,q:req.query.q,aqi:req.query.aqi,days:req.query.days,alerts:req.query.alerts}).end(async(err,res)=>{
    if(err){    
    return console.log(err);}
    const newWeather={
        time:"forecast",
        key:req.query.key,
        q:req.query.q,
        alerts:req.query.alerts,
        days:req.query.days,
        aqi:req.query.aqi
    }
    let savedWeather=weather.create(newWeather)
    let forecastResult=[]
    for(i in res.body.forecast.forecastday ){
    
    const result=await forecastWeatherMapper(res.body.forecast.forecastday[i].astro)
    forecastResult.push(result)
    }
    response.send(forecastResult)
    })})


    const currentWeatherMapper=async (location)=>{
    try{ 
    let currWeather=await currentWeather.findById('62838d42e0a0eedc1f3daf23')
       let result={}
       console.log(currWeather);
    result[currWeather.name]=location.name
    result[currWeather.region]=location.region
    result[currWeather.country]=location.country
    result[currWeather.lat]=location.lat
    result[currWeather.lon]=location.lon
    result[currWeather.tz_id]=location.tz_id
    result[currWeather.localtime]=location.localtime
       return result
    }
    catch(err){
        console.error(err)
    }
     }

     const forecastWeatherMapper= async (astro)=>{
        try{
         
            let forecastAstro= await forecastWeather.findById('62838d5ee0a0eedc1f3daf25')
         const result={}
         result[forecastAstro.sunrise]=astro.sunrise
         result[forecastAstro.sunset]=astro.sunset
         result[forecastAstro.moonrise]=astro.moonrise
         result[forecastAstro.moonset]=astro.moonset
         result[forecastAstro.moon_phase]=astro.moon_phase
         result[forecastAstro.moon_illumination]=astro.moon_illumination
         return result
     }
     catch(err){
         console.error(err)
     }
    }
     router.post('/add/current',async (req,res)=>{
      let currenT=await new currentWeather(req.body)
      res.send(await currenT.save())
     })
     router.post('/add/forecast',async(req,res)=>{
        let foreCast=await new forecastWeather(req.body)
        
        res.send(await foreCast.save())
       })

    module.exports=router