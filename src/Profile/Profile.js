import React,{useEffect, useState} from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import ProfileSidebar from './ProfileSidebar'
import './assets/style/profile.css'
import ProfileContainer from './ProfileContainer'
import data from './data.json'

function Profile() {
  // state for set the active sidebar for container
  const [activeSidebar,setActiveSidebar] = useState(1)
  const [activeDropdown,setActiveDropdown] = useState(0)
  const [userData,setUserData] = useState({})

  useEffect(() => {
    setUserData(data.user)
  },[])

  return (
    <>
        <NavigationBar />
          <Container className='profile-page p-0'>
            <Row>
              <Col className="profile-sidebar" xs="auto">
                <ProfileSidebar activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
              </Col>
              <Col>
                <ProfileContainer activeSidebar={activeSidebar} activeDropdown={activeDropdown} userData={userData}setUserData={setUserData}/>
              </Col >
            </Row>
          </Container>
        <Footer />
    </>
  )
}

export default Profile