import React from 'react';
import { NavbarSimple } from '../components/NavBar';
import Hero from '../components/Hero';
import { Numerics } from '../components/Numerics';
import { Courses } from '../components/Courses';
import { Facilities } from '../components/Facilities';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactUs';
import SyllabusMailer from '../components/SyllabusMailer';

export const Landing = () => {
    return (
        <>
            <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
                <NavbarSimple />
                <Hero />
                <Numerics id='numerics' />
                <Courses />
                <Facilities />
                <AboutUs />
                <ContactForm />
                {/* <SyllabusMailer courses="MEP" /> */}
            </div>
        </>
    );
};