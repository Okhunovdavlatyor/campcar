import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MotorComponent from './components/motor';
import HomeComponent from './components/home';
import CaravanComponent from './components/caravan';
import TuningComponent from './components/tuning';
import UsedCarComponent from './components/usedcar';
import CampingPlaceComponent from './components/campingplace';
import Navbarcomponent from './navbar';


const RouterComponent = () => {
  return (
    <>
         <Navbarcomponent />
     <Routes>
        <Route path='/' element={<HomeComponent />} /> 
        <Route path='/motor' element={<MotorComponent />} /> 
        <Route path='/caravan' element={<CaravanComponent />} /> 
        <Route path='/tuning' element={<TuningComponent />} /> 
        <Route path='/used-car' element={<UsedCarComponent />} /> 
        <Route path='/camping-place' element={<CampingPlaceComponent />} /> 
     </Routes>

    </>
   
  )
}

export default RouterComponent;