import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import engvb from '../assets/engVB.png'
import engvbl from '/systum.png'
import { Link, useNavigate } from "react-router-dom";

function NavList() {

    const scrollIntoView = (name) => {
        const element = document.getElementById(name);
        element.scrollIntoView({ behavior: "smooth", duration: 30 });
    };

    const navigate = useNavigate();

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
            <Typography
                as="li"
                color="white"
                className="p-1 font-medium"
            >
                <a onClick={() => navigate('/')} className="flex items-center hover:text-[#fb672c] transition-colors cursor-pointer">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                color="white"
                className="p-1 font-medium"
            >
                <a onClick={() => { navigate('/courses') }} className="flex items-center hover:text-[#fb672c] transition-colors cursor-pointer">
                    Courses
                </a>
            </Typography>
            <Typography
                as="li"
                color="white"
                className="p-1 font-medium"
            >
                <a onClick={() => navigate('/about-us')} className="flex items-center hover:text-[#fb672c] transition-colors cursor-pointer">
                    About Us
                </a>
            </Typography>
            <Typography
                as="li"
                color="white"
                className="p-1 font-medium"
            >
                <a onClick={() => navigate('/contact-us')} className="flex items-center hover:text-[#fb672c] transition-colors cursor-pointer">
                    Contact Us
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar id="nav" className="mx-auto max-w-screen-xl px-6 lg:px-10 py-3 bg-primary border-none shadow-none">
            <div className="flex items-center justify-between text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                    onClick={() => { window.location.href = '/' }}
                >
                    <img src={engvbl} alt="engvb" className="h-16" />
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}