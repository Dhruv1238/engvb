import AboutUs from "../components/AboutUs"
import { NavbarSimple } from "../components/NavBar"


export const About = () => {
    return (
        <>
            <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
                <NavbarSimple />
                <AboutUs />
            </div>
        </>
    )
}