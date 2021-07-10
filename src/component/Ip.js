export default function Ip({ ip, location }) {
    // ip is the user ip
    // location is iso-2 output for Germany will be: "DE"

    return (
        <>
            <h4>Your Ip is: {ip}</h4>
            <h4>Your Location is: {location}</h4>
        </>
    )
}