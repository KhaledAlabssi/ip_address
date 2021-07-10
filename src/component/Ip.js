export default function Ip({ ip, location }) {
    // ip is the user ip
    // location is iso-2 output for Germany will be: "DE"

    return (
        <>
            <h4>Your Ip is: {ip}</h4>
            
            <p>Your Country: {location.country}</p>
            <p>Your Region: {location.region}</p>
            <p>Your City: {location.city}</p>
            <p>Lat: {location.lat}</p>
            <p>Lng: {location.lng}</p>
            <p></p>
        </>
    )
}