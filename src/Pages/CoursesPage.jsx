import AboutUs from "../components/AboutUs"
import { Courses } from "../components/Courses"
import { Footer } from "../components/Footer"
import { NavbarSimple } from "../components/NavBar"


export const CoursesPage = () => {
    return (
        <>
                <NavbarSimple />
                {/* <AboutUs /> */}
                <Courses />
                <Footer />
        </>
    )
}