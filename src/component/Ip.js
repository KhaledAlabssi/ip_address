export default function Ip({ ip, location, capital, language, population, currency, flag, userData }) {
    // ip is the user ip
    // location is iso-2 output for Germany will be: "DE"
    // console.log(location)
   if(userData){
    return (


        <>
        
                    <h4>Your Ip is: {ip}</h4>
                     <img src={flag} style={{width: 100, height: 75}}></img>
                    <p>Your Country: {location.country}</p>
                    <p>Your Region: {location.region}</p>
                    <p>Your City: {location.city}</p>
                    <p>Lat: {location.lat}</p>
                    <p>Lng: {location.lng}</p>
                    <p>Capital: {capital}</p>
                    <p>Language: {language}</p>
                    <p>Population: {population}</p>
                    <p>Currency: {currency}</p>
                    
                    
        </>
            
            
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