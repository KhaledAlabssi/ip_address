import { useState, useEffect } from 'react';
import Ip from './component/Ip'
import Map from './component/Map';
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Navbar, FlexboxGrid, Panel, Col} from 'rsuite';
import './App.css';

function App() {
  const [ip, setIp] = useState('')
  const [location, setLocation] = useState('')
  const [position, setPosition] = useState([])
  const [capital, setCapital] = useState('')
  const [currency, setCurrency] = useState('')
  const [language, setLanguage] = useState('')
  const [population, setPopulation] = useState('')
  const [flag, setFlag] = useState('')
  const [userData, setUserData] = useState([])
  useEffect(async() => {
       await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`)
      .then((res) =>{
        if(res.ok){
        return res.json()}
        else{
          throw new Error('Error')
        }
      })
        
      .then( async (result) => {
        console.log(result.location)
        setPosition([location.lat, location.lng])
        setIp(result.ip)
        setLocation(result.location)
        console.log(location)
        console.log(location.country)
        fetch(`https://restcountries.eu/rest/v2/alpha/${result.location.country}`)
        .then((res) =>{
          if(res.ok){
          return res.json()}
          else{
            throw new Error('Error')
          }
        })
        .then(async (result)=>{
          setUserData(await result)
          setCapital(result.capital)
          setCurrency(result.currencies[0].name)
          setLanguage(result.languages[0].name)
          setPopulation(result.population)
          setFlag(result.flag)
          console.log('a bunch of stuff')
        })

      })
  }, [])

  return (
    // <div className="App">
    //   <h1>{ip}</h1>
      
    // </div>
    <div className="show-fake-browser login-page">
    <Container style={{'height': '100vh'}}>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            {/* <a  className="navbar-brand logo">Brand</a> */}
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content style={{padding: 25}}>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
            <Panel header={<h3>IP Details</h3>} bordered >
              <Ip ip={ip} location={location} capital={capital} currency={currency} language={language} population={population} flag={flag} userData={userData}/>
              
              
            </Panel>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
            <Panel header={<h3>Map</h3>} bordered >
              <Map location={location}/>
              
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        
      </Content>
      <Footer>Footer</Footer>
    </Container>
  </div>
  );
}

export default App;
