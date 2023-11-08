import { Typography } from "@material-tailwind/react";
import logo from '../assets/engVB.png'
import logo2 from '/engvbl.jpeg'
import { PhoneArrowUpRightIcon, MapPinIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export function Footer() {

    const handleRedirect = () => {
        window.open('https://maps.app.goo.gl/JPJ1Fftwbbz9CK7t9', '_blank');
    }

    // const handleScroll = () => {
    //     window.scrollTo(0, 0);
    // }

    return (
        <footer className="w-full bg-primary p-8">
            <div className="flex flex-row flex-wrap items-start justify-center gap-y-6 gap-x-12 bg-primary text-center md:justify-between">
                <img src={logo} alt="logo-ct" className="h-24" />
                <div className="flex gap-10">
                    <ul className="flex flex-wrap items-start justify-start gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                License
                            </Typography>
                        </li>
                    </ul>
                    <div className="flex flex-col items-start gap-y-2">

                        <Typography
                            //   as="a"
                            //   href="#"
                            color="white"
                            className="font-normal flex transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            <PhoneArrowUpRightIcon className='w-5 h-5 mr-5' />
                            +91 98190 79636
                        </Typography>
                        <div className="flex flex-row font-normal transition-colors hover:text-blue-500 focus:text-blue-500 items-start gap-y-2 max-w-xs">
                            <MapPinIcon className='w-16 h-16 mr-5 text-white' />
                            <Typography type="a" onClick={handleRedirect} color="white" className="font-normal cursor-pointer text-start transition-colors hover:text-blue-500 focus:text-blue-500">
                                Hawares Centurion Mall, Sector 19A (10A-Plot No. 88/91, Nerul East, Navi Mumbai, Maharashtra 400706
                            </Typography>
                        </div>
                    </div>
                    {/* <ArrowUpIcon className='w-10 h-10 text-white cursor-pointer' onClick={handleScroll} /> */}
                </div>
            </div>
            <hr className="my-8 border-white-50" />
            <Typography color="white" className="text-center font-normal">
                &copy; 2023 ENG VB Learning
            </Typography>
        </footer>
    );
}