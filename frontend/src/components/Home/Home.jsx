import React, { useContext } from 'react'
import { Context } from '../../index'
import { Navigate } from 'react-router-dom';
import HowItWorks from "./HowItWorks";

function Home() {

  const {isAuthorized}=useContext(Context);

  return (
    <section className='homePage page'>
    <HowItWorks />
    </section>
  )
}

export default Home
