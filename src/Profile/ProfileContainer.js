import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileAccount from './ProfileAccount'
import './assets/style/profile-account.css'

export default function ProfileContainer({activeSidebar,activeDropdown}) {
  // function to return what container should be shown 

  switch (activeSidebar) {
    case 1:
      // Pesanan saya akan ditampilkan 
      return(
        <Container className="profile-container">
           {/* Pesanan Saya */}
        </Container>
      )
    case 2:      
      // notifikasi settings akan ditampilkan 
      return(
        <Container className="profile-container">
          {/* Notifikasi */}
        </Container>
      )
    case 3:
      // wishlist akan ditampilkan 
      return(
        <Container className="profile-container">
          {/* Wishlist */}
        </Container>
      )
    default:
      // akun saya akan ditampilkan 
      return (
        <Container className="profile-container p-0"  >
          <ProfileAccount activeDropdown={activeDropdown}/>         
        </Container>
      )
  }


}

