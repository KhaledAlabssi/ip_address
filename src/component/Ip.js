export default function Ip({ip, location, capital, language, population, currency, flag, userData, weather, weatherState }) {
    // ip is the user ip
    // location is iso-2 output for Germany will be: "DE"
    // console.log(location)
   if(userData){
    return (


        <div style={{'min-height': '70vh'}}>
        
                    <h6>IP Info:</h6>
                    <p>Your Ip is: {ip}</p>
                    <p>Your Country: {location.country}</p>
                    <p>Capital: {capital}</p>
                    <img src={flag} style={{width: 100, height: 75}}></img>
                    <hr/>
                    <h6>Geo Info:</h6>
                    <p>Your Region: {location.region}</p>
                    <p>Your City: {location.city}</p>
                    <p>Lat: {location.lat}</p>
                    <p>Lng: {location.lng}</p>
                    <hr/>
                    <h6>General Info:</h6>
                    
                    <p>Language: {language}</p>
                    <p>Population: {population}</p>
                    <p>Currency: {currency}</p>
                    <hr/>
                    <h6>Your Location Weather 'by openweatherapi':</h6>
                    <p>Temparature:{weather}</p>
                    <p>Weather feels:{weatherState}</p>
                    
                    
        </div>
            
            
            /* <p>Capital: {capital} </p> */ 
    /* <p>Language: {language} </p> */ 
    /* <p>Population: {population}</p> */ 
    /* <p>Currency: {currency}</p> */ 
    /* <p>Flag: <img src={flag} style={{width: 100, height: 50}} alt = "flag"></img></p> */ 
       
        
    )} else{
        return (
            <>
            <h1>Loading</h1>
            </>
        )
    }
}