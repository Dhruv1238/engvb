import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import { Landing } from './Pages/Landing';
import { About } from './Pages/About';

export const Router=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </>
    )
}