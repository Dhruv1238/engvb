import React from "react";
import robot from "../assets/robot.svg";
import { Button, Card } from "@material-tailwind/react";
import { ReceiptPercentIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Hero = () => {
    const scrollIntoView = () => {
        document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section id="home" className={`flex md:flex-row flex-col py-6`}>
            <div className={`flex-1 flex justify-center items-start flex-col xl:px-24 sm:px-16 px-6`}>
                <Card className="flex flex-row items-center py-[6px] px-4 backdrop-filter backdrop-blur-lg wobble animate-wobble bg-gradient-to-tl from-primary to-gray-900 rounded-[10px] mb-2">
                    <ReceiptPercentIcon className="w-6 h-6 text-white" />
                    <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] ml-2`}>
                        <span className="text-white">20%</span> Discount If{" "}
                        <span className="text-white">You Join Now</span>
                    </p>
                </Card>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Shaping <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Career in</span>{" "}
                    </h1>
                    <div className="xs:flex hidden md:mr-4 mr-0">
                        {/* <Link to="courses" smooth={true} duration={500}> */}
                            <Button onClick={scrollIntoView} variant="outlined" color="white" className="my-10 flex flex-row items-center justify-center gap-3 rounded-full hover:scale-105 duration-300" size="lg">
                                Get Started
                                <ArrowTrendingUpIcon className="w-6 h-6" />
                            </Button>
                        {/* </Link> */}
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Virtual Construction
                </h1>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                    ENG VB is a leading Digital Twin, BIM C MEP Design Consultancy firm in India, having Head office in Navi Mumbai. ENG VB is one of the pioneers in the integration of 3D Virtual model in AEC industry, which is now helping Builders, Architects, Engineers, and Contractors in Visualizing the Project before construction.
                </p>

            </div>

            <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <div className={`ss:hidden flex justify-center items-center`}>
                {/* <Link to="courses" smooth={true} duration={500}> */}
                    <Button onClick={scrollIntoView} variant="outlined" color="white" className="my-10 flex flex-row items-center justify-center gap-3 rounded-full" size="lg">
                        Get Started
                        <ArrowTrendingUpIcon className="w-6 h-6" />
                    </Button>
                {/* </Link> */}
            </div>
        </section>
    );
};


export default Hero;
