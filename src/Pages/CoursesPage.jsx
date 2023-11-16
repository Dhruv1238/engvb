import AboutUs from "../components/AboutUs"
import { Courses } from "../components/Courses"
import { Footer } from "../components/Footer"
import { NavbarSimple } from "../components/NavBar"


export const CoursesPage = () => {
    return (
        <>
            <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
                <NavbarSimple />
                {/* <AboutUs /> */}
                <Courses />
                <Footer />
            </div>
        </>
    )
}