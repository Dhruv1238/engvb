import { Card, Typography } from "@material-tailwind/react";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const AnimatedCard = ({ children }) => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    const cardRef = useRef(null);

    useEffect(() => {
        if (inView) {
            cardRef.current.classList.add('slide-in');
        } else {
            cardRef.current.classList.remove('slide-in');
        }
    }, [inView]);

    return (
        <div ref={ref} >
            <Card className="feature-card h-[40vh] w-full hover:scale-105 duration-300 flex justify-center gap-3 items-start p-10" ref={cardRef}>
                {children}
            </Card>
        </div>
    );
};

const SystemsList = ({ v1, v2, v3, v4, v5 }) => {
    return (
        <>
            <ul className="list-disc text-white text-xl">
                <li>
                    <Typography className="text-xl md:text-3xl ">{v1}</Typography>
                </li>
                <li>
                    <Typography className="text-xl md:text-3xl">{v2}</Typography>
                </li>
                <li>
                    <Typography className="text-xl md:text-3xl">{v3}</Typography>
                </li>
                <li>
                    <Typography className="text-xl md:text-3xl">{v4}</Typography>
                </li>
                <li>
                    <Typography className="text-xl md:text-3xl">{v5}</Typography>
                </li>
            </ul>
        </>
    );
};

const handleMEPPdf = () => {
    const link = document.createElement("a");
    link.href = "/MEP.pdf"; // path to your PDF file
    link.download = "MEP Design.pdf"; // name for downloaded file
    link.click();
};

const handleRevitMEPPdf = () => {
    const link = document.createElement("a");
    link.href = "/MEP.pdf"; // path to your PDF file
    link.download = "MEP Design.pdf"; // name for downloaded file
    link.click();
};

export const Courses = () => {

    return (
        <>
            <Typography color="white" variant="h1" className='text-center font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full py-12'>
                We Offer
            </Typography>
            <div id='numerics' className='px-6 md:px-16  grid grid-cols-1 gap-5 sm:grid-cols-2 pb-24'>
                <div onClick={handleRevitMEPPdf} className=" cursor-pointer">
                <AnimatedCard>
                    <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                        REVIT MEP
                    </Typography>
                    <SystemsList v1="Electrical Systems" v2="Plumbing and Drainage Systems" v3="Fire Protection Systems" v4="HVAC System" v5="FA, PA, CCTV, and Security Systems" />
                </AnimatedCard>
                </div>
                <div onClick={handleMEPPdf} className=" cursor-pointer">
                    <AnimatedCard>
                        <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                            MEP Design
                        </Typography>
                        <SystemsList v1="Electrical Systems" v2="Plumbing and Drainage Systems" v3="Fire Protection Systems" v4="HVAC System" v5="FA, PA, CCTV, and Security Systems" />
                    </AnimatedCard>
                </div>
                <AnimatedCard>
                    <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                        REVIT Structure
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                        REVIT Architecture
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        Revit Automation
                    </Typography>
                </AnimatedCard>
            </div>
        </>
    )
}