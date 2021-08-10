import { useState, useEffect } from "react";
import Ip from "./component/Ip";
import Map from "./component/Map";
import "rsuite/dist/styles/rsuite-default.css";
import {
  Container,
  Header,
  Content,
  Footer,
  Navbar,
  FlexboxGrid,
  Panel,
  Col,
} from "rsuite";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState([]);
  const [capital, setCapital] = useState("");
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [population, setPopulation] = useState("");
  const [flag, setFlag] = useState("");
  const [userData, setUserData] = useState([]);
  const [weather, setWeather] = useState(22);
  const [weatherState, setWeatherState] = useState('clear')

  useEffect(() => {
    const fetching = async () => {
      const fetchIpify = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
      )
      const result = await fetchIpify.json()
      
      setPosition([result.location.lat, result.location.lng]);
      setIp(result.ip);
      setLocation(result.location);
        
  
      const fetchContries = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${result.location.country}`
      )
        const result2 = await fetchContries.json()
        
          setUserData(result2);
          setCapital(result2.capital);
          setCurrency(result2.currencies[0].name);
          setLanguage(result2.languages[0].name);
          setPopulation(result2.population);
          setFlag(result2.flag);
        
  
      const fetchOpenWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${result.location.city}&units=metric&APPID=${
          process.env.REACT_APP_OPEN_API_KEY
        }`
      )
        const data = await fetchOpenWeather.json()
        
          console.log(data);
          setWeather(data.main.temp);
          setWeatherState(data.weather[0].main)
          console.log(data.main.temp)
          console.log(data.weather[0].main)
          console.log(weather)

        
    };
    fetching();
  }, []);


  return (
    // <div className="App">
    //   <h1>{ip}</h1>

    // </div>
    <div className="show-fake-browser login-page">
      <Container style={{ height: "100vh" }}>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <a href='https://github.com/KhaledAlabssi/ip_address' target='_blank' className="navbar-brand logo">Source code</a>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content style={{ padding: 25 }}>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
              <Panel header={<h5>IP Info</h5>} bordered>
                <Ip
                  ip={ip}
                  location={location}
                  capital={capital}
                  currency={currency}
                  language={language}
                  population={population}
                  flag={flag}
                  userData={userData}
                  weather={weather}
                  weatherState={weatherState}
                  
                />
              </Panel>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
              <Panel header={<h5>Map:</h5>} bordered>
                <Map location={location} />
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default App;
