import { useState, useEffect } from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Navbar, FlexboxGrid, Panel, Col} from 'rsuite';
import './App.css';

function App() {
  const [ip, setIp] = useState('')

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`)
      .then(res => res.json())
      .then(result => setIp(result.ip));
  })
  
  return (
    // <div className="App">
    //   <h1>{ip}</h1>
      
    // </div>
    <div className="show-fake-browser login-page">
    <Container style={{'height': '100vh'}}>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a className="navbar-brand logo">Brand</a>
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content style={{padding: 25}}>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
            <Panel header={<h3>IP Details</h3>} bordered >
              <h4>Your IP is: {ip}</h4>
              
            </Panel>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
            <Panel header={<h3>Map</h3>} bordered >
              
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
