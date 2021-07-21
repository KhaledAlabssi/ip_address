export default function Ip({ip, location, capital, language, population, currency, flag, userData, weather, weatherState }) {
    // ip is the user ip
    // location is iso-2 output for Germany will be: "DE"
    // console.log(location)
   if(userData){
    return (


        <div style={{height: '70vh'}}>
        
                    <h4>Your Ip is: {ip}</h4>
                     <img src={flag} style={{width: 100, height: 75}}></img>
                    <p>Your Country: {location.country}</p>
                    <p>Capital: {capital}</p>
                    <hr/>
                    <h4>Geo Info:</h4>
                    <p>Your Region: {location.region}</p>
                    <p>Your City: {location.city}</p>
                    <p>Lat: {location.lat}</p>
                    <p>Lng: {location.lng}</p>
                    <hr/>
                    <h4>General Info:</h4>
                    
                    <p>Language: {language}</p>
                    <p>Population: {population}</p>
                    <p>Currency: {currency}</p>
                    <hr/>
                    <h4>Your Location Weather:</h4>
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