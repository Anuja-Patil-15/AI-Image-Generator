import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Rating from '../components/Rating'
import GenerateButton from '../components/GenerateButton'

const HOME = () => {
  return (
    <div>
     <Header/>    
     <Steps/>
     <Description/>
     <Rating/>
     <GenerateButton/>
    </div>
  )
}

export default HOME
