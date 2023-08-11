import './weather.css';
import { useEffect, useState } from "react";

function WeatherAPP(){
    let [cityName, setCityName] = useState("Rajkot");
    let [name, setName] = useState("");
    let [sysData, setSysData] = useState({});
    let [date1, setDate1] = useState({});
    let [clouds, setClouds] = useState({});
    let [sunTime, setSuntimes] = useState({rise_time : "", set_time : ""});
    let [wind, setWind] = useState({});
    let [mainData, setMainData] = useState({});
    let [weather, setWeather] = useState({});
    let [weatherIcon, setWeatherIcon] = useState("wi wi-day-sunny p-4");


    let APIURL =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc49a1b157d9c597ad4623b6276609d7&units=metric`;


    //  function for load weather information
    function getWeatherInformation(){
        fetch(APIURL).then((response)=>{
            response.json().then((result)=>{
                console.log(result);

                if(result.cod === 200){
                    setName(result.name);
                    setSysData(result.sys);
                    setMainData(result.main);
                    setWeather(result.weather[0]);
                    setWind(result.wind);
                }else{
                    alert("Invalid Name of City");
                }
            });
        });
    }


    // default load weather info when app is launched
    useEffect(()=>{
        getWeatherInformation();
    }, []);


    useEffect(()=>{
        switch(weather.main){
            case "Clouds":{
                setWeatherIcon("wi wi-day-cloudy p-5");
                break;
            }
            case "Rain":{
                setWeatherIcon("wi wi-day-rain p-5");
                break;
            }
            case "Snow":{
                setWeatherIcon("wi wi-day-snow p-5");
                break;
            }
            case "Haze":{
                setWeatherIcon("wi wi-day-haze p-5");
                break;
            }default:{
                setWeatherIcon("wi wi-day-sunny p-5");
                break;
            }
        }
    }, [weather]);


    // effect for get sunrise and sunset times
    useEffect(()=>{
        let riseTime = new Date(sysData.sunrise * 1000);
        let setTime = new Date(sysData.sunset * 1000);

        setSuntimes({rise_time : riseTime.getHours()+":"+riseTime.getMinutes(), set_time : setTime.getHours()+":"+setTime.getMinutes()});
    }, [sysData])
    return <>
        <div className="container-fluid">
            <h1 className="bg-primary p-4 text-white">Weather Application</h1>

            <hr></hr>
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group">
                        <input type="text" className="form-control p-3" value={cityName} placeholder="Enter City Name" onChange={(event)=>setCityName(event.target.value)}></input>
                        <span className="input-group-text">
                            <button className="btn btn-primary" onClick={()=>getWeatherInformation()}>Search</button>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <i className={weatherIcon} style={{fontSize:"70px"}}></i>
                    <h1>{weather.main}</h1>
                    <p className='h3'>{weather.description}</p>
                </div>
                <div className="col-md-6">
                    <h1 className='p-3 display-1'>{mainData.temp}</h1>
                </div>
                <div className="col-md-6">
                    <h1 className='p-3 display-1'>{name} <sup className='h1'>{sysData.country}</sup></h1>
                </div>
            </div>

            <div className='row p-4'>
                <div className='col-md-6 text'>
                    <i className='wi wi-sunrise icon x2'></i>
                    <br></br>
                    {sunTime.rise_time}
                </div>
                <div className='col-md-6 text'>
                    <i className='wi wi-sunset icon x2'></i>
                    <br></br>
                    {sunTime.set_time}
                </div>
            </div>

            <div className='row'>
                <div className='col-md-3 text'>
                    <i className='wi wi-thermometer-exterior icon'></i>
                    <br></br>
                    {mainData.temp_min}
                </div>
                <div className='col-md-3 text'>
                    <i className='wi wi-thermometer icon'></i>
                    <br></br>
                    {mainData.temp_max}
                </div>
                <div className='col-md-3 text'>
                    <i className='wi wi-barometer icon'></i>
                    <br></br>
                    {mainData.pressure}
                
                </div>
                <div className='col-md-3 text'>
                <i className='wi wi-humidity icon'></i>
                    <br></br>
                    {mainData.humidity}
                </div>
            </div>

            <div className='row p-4'>
                <div className='col-md-6 text'>
                    <i className='wi wi-strong-wind icon x2'></i>
                    <br></br>
                    {wind.speed}
                </div>
                <div className='col-md-6 text'>
                    <i className='wi wi-wind-direction icon x2'></i>
                    <br></br>
                    {wind.deg}
                </div>
            </div>
        </div>
    </>
}

export default WeatherAPP;