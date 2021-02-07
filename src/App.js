import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/weather.component";
import Form from "./components/form.component";


const API_KEY="8d0ad7c46e6cefb08474a8383fb8686e"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:"",
      country:"",
      icon:"",
      main:"",
      celsius:"",
      temp_max:"",
      temp_min:"",
      description:"",
      error:false
    };

  }

  calCelsius(temp){
    let cell =Math.floor(temp - 273.15);
    return cell;
  }

getWeather = async(e)=>{
  
    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    if(city && country){
      
   const api_call= await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    
 
   const response = await api_call.json();
   console.log(response);

   if(api_call.status === 200){
     this.setState({
       city:`${response.name},${response.sys.country}`,
       temp_celsius:this.calCelsius(response.main.temp),
       temp_max:this.calCelsius(response.main.temp_max),
       temp_min:this.calCelsius(response.main.temp_min),
       description: response.weather[0].description,
       error:false
    });
    
   }else{
     
    this.setState({error:true});
   }
  }else{

    this.setState({error:true});
  }
  

};

  render(){
    return(
      <div className="App">
      <h4>Let's Check Weather...</h4>
      <Form 
        loadweather={this.getWeather}
        error={this.state.error}
      />
      <Weather 
        city={this.state.city}
        country={this.state.country}
        temp_celsius={this.state.temp_celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
      />
    </div>
    );
  }
}


export default App;