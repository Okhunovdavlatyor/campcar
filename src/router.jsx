import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MotorComponent from './components/motor';
import HomeComponent from './components/home';
import CaravanComponent from './components/caravan';
import TuningComponent from './components/tuning';
import UsedCarComponent from './components/usedcar';
import CampingPlaceComponent from './components/campingplace';
import Navbarcomponent from './navbar';
import DetailPage from './components/detail';

import CaravanClickComponent from './components/caravanclick';
import TuningClickComp from './components/tuningclick';
import CartComp from './components/cart';
import SignComp from './components/sing';



const RouterComponent = () => {
  return (
    <>
         <Navbarcomponent />
     <Routes>
        <Route path='/home' element={<HomeComponent />} /> 
        <Route path='/motor' element={<MotorComponent />} /> 
        <Route path='/caravan' element={<CaravanComponent />} /> 
        <Route path='/tuning' element={<TuningComponent />} /> 
        <Route path='/usedcar' element={<UsedCarComponent />} /> 
        <Route path='/camping-place' element={<CampingPlaceComponent />} /> 
        <Route path='/motor/:id' element={<DetailPage />} /> 
        <Route path='/caravan/:id' element={<CaravanClickComponent />} /> 
        <Route path='/tuning/:id' element={<TuningClickComp />} /> 
        <Route path='/cart' element={<CartComp />} />
        <Route path='/sign' element={<SignComp />} />
     </Routes>

    </>
   
  )
}

export default RouterComponent;