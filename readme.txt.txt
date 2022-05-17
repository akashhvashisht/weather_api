1.npm i 
2.db connection in config/db.js 
   import database which i have provided (weather in mongodb)
3. routes in routes/route.js
4. current weather custom api -> weather/current
    query params- key,q,aqi
5. forecast weather custom api-> weather/forecast
    query params- key,q,aqi,alerts,days
6. Adding mapping configuration of current weather -> Model name- CurrentWeather.js
    custom api to add configuration-> (POST)/weather/add/current 
     body-> name:town
            region:state
           country:nation
           lat: latitude
           lon:longitude
           tz_id :Time Zone
           localtime: Time
 7.Adding mapping configuration of forecast weather -> Model name- ForecastWeather.js
   custom api to add configuration-> (POST)/weather/add/forecast
   body->sunrise:Dawn
         sunset:Dusk
         moonrise:moon lit
         moonset:on sleep
         moon_phase:orientation
         moon_illumination:Illumination