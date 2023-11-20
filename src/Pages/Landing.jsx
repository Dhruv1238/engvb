import React, { useState, useEffect } from 'react';
import { NavbarSimple } from '../components/NavBar';
import Hero from '../components/Hero';
import { Numerics } from '../components/Numerics';
import { Courses } from '../components/Courses';
import { Facilities } from '../components/Facilities';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactUs';
import { Footer } from '../components/Footer';
import Certifications from '../components/Certification';
import { Clients } from '../components/Clients';

export const Landing = () => {
    // const [opacity, setOpacity] = useState(1);
    // const [isVisibleRem, setIsVisibleRem] = useState(false);

    // useEffect(() => {
    //     const now = new Date();
    //     const dueDateTime = new Date('2023-11-30'); // 30 Nov 2023
    //     const daysLeft = Math.ceil((dueDateTime - now) / (1000 * 60 * 60 * 24));
    //     if (daysLeft <= 2) {
    //         const opacity = 1 - (daysLeft === 1 ? daysLeft * 2 : daysLeft - 1) * 0.35;
    //         setOpacity(opacity);
    //     }

    //     if (now > dueDateTime) {
    //         setIsVisibleRem(true);
    //     }
    // }, []);


    return (
        <>
            {/* {isVisibleRem ? (
                <>
                    <Typography className="text-center text-4xl font-bold text-primary">
                        Something Went Wrong
                        Please Complete Your Payment
                    </Typography>
                </>
            ) : ( */}
            <NavbarSimple />
            <Hero />
            <Numerics />
            <Certifications />
            {/* <Courses /> */}
            <Facilities />
            <Clients />
            {/* <AboutUs /> */}
            <ContactForm />
            <Footer />
            {/* )} */}
        </>
    );
};