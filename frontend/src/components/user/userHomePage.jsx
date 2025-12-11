import React from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../../css/root.css'
import '../../../css/publicHome/navbar.css'
import UserNavBar from './userNavbar'

const UserHomePage=()=>{
  return (
    <>
      <UserNavBar/>
    </>
  );
}
export default UserHomePage
