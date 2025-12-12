import React from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import '../../../css/root.css'
// import '../../../css/publicHome/navbar.css'
import UserNavBar from './userNavbar'
import Hero from '../common/hero'
import PopularCars from '../common/popularCar'
import AddReview from './addreview'

const UserHomePage=()=>{
  return (
    <>
      <Hero/>
      <PopularCars/>
      <AddReview/>
    </>
  );
}
export default UserHomePage
