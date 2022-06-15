import React,{useState} from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import ProfileSidebar from './ProfileSidebar'
import './assets/style/profile.css'
import ProfileContainer from './ProfileContainer'

function Profile() {
  const [activeSidebar,setActiveSidebar] = useState(0)
  return (
    <>
        <NavigationBar />
          <Container className='profile-page'>
            <Row>
              <Col><ProfileSidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} /></Col>
              <Col><ProfileContainer activeSidebar={activeSidebar} /></Col >
            </Row>
          </Container>
        <Footer />
    </>
  )
}

export default Profile