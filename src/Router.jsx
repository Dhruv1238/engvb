import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import { Landing } from './Pages/Landing';
import { About } from './Pages/About';
import { CoursesPage } from './Pages/CoursesPage';
import { Contact } from './Pages/ContactUs';

export const Router=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/courses' element={<CoursesPage />}/>
            <Route path='/contact-us' element={<Contact />}/>
        </Routes>
        </>
    )
}