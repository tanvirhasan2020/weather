import React from 'react'
import "../components/weather.css"

const Form = (props)=> {
    return(

    <div className="form"> 
      <form onSubmit={props.loadweather}>
        <div>{props.error && error()}</div>
         <div className="row">
            <div className="col-md-3 space offset-md-2">
              <input 
                type="text"
                placeholder="City"
                className="form-control" 
                name="city" 
                autoComplete="off"
                /> 
             </div>
            <div className="col-md-3 space">
              <input 
                type="text" 
                placeholder="Country"
                className="form-control" 
                name="country" 
                autoComplete="off"/>
            </div>
            <div className="col-md-3 mt-md-0 text-md-left">
                 <button className="btn space">Get Weather</button>
            </div>
          </div>
        </form>
    </div>
  );

function error(){
  return (
     <div>
       <div className="alert mx-5" role="alert">
         <h6>Please Enter City & Country.</h6>
       </div>
      </div>
    );
  }

}



export default Form;