import { Footer } from "../components/Footer"
import { NavbarSimple } from "../components/NavBar"
import ContactForm from "../components/ContactUs"


export const Contact = () => {
    return (
        <>
            <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
                <NavbarSimple />
                <ContactForm />
                <Footer />
            </div>
        </>
    )
}