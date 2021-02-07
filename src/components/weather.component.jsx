import React from "react";
import "../components/weather.css";
import {WiCloudy} from "react-icons/wi";

const Weather=(props)=>{
  
    return (
      <div className="container text-light">
         <div className="cards">
            <h1>{props.city}</h1>
               <h1><WiCloudy className="weather-icon"/></h1>
                
             {props.temp_celsius && (<h2 className="py-2">{props.temp_celsius}&deg;C</h2>)}

            {/** show min and max temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>
 
      </div>
  );
//https://github.com/akashyap2013/Weather_App/blob/master/src/assets/blur-background-1187974.jpg?raw=true
//https://miro.medium.com/max/1620/1*GsImz-edoeuqCMfKxDus0w.jpeg

  function minmaxTemp(min,max){
   if(min && max){
     return(
      <h3>
      <span className="py-4">Min {min}&deg;C </span>&emsp;&nbsp;&nbsp;
      <span className="py-4">Max {max}&deg;C</span>
      </h3>
      );
     }
    }

}





export default Weather;