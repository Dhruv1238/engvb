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
            <Card className="feature-card md:h-[40vh] min-h-[40vh] w-full hover:scale-105 duration-300 flex justify-center gap-3 items-start p-9 pr-0" ref={cardRef}>
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
    link.href = "/MEP.pdf";
    link.download = "MEP Design Syllabus - ENG VB Learning.pdf";
    link.click();
};

const handleRevitMEPPdf = () => {
    const link = document.createElement("a");
    link.href = "/RevitMEP.pdf";
    link.download = "Revit MEP Syllabus - ENG VB Learning.pdf";
    link.click();
};

const handleRevitStructPdf = () => {
    const link = document.createElement("a");
    link.href = "/RevitStruct.pdf";
    link.download = "Revit Structure Syllabus- ENG VB Learning.pdf";
    link.click();
};

const handleRevitArchPdf = () => {
    const link = document.createElement("a");
    link.href = "/RevitArch.pdf";
    link.download = "Revit Architecture Syllabus - ENG VB Learning.pdf";
    link.click();
};

export const Courses = () => {

    return (
        <>
            <Typography color="white" variant="h1" className='text-center font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full pt-12'>
                Courses Offered
            </Typography>
            <Typography className="text-gradient font-bold text-md md:text-xl text-center wobble animate-wobble p-10">
                Click the Courses to get the Detailed Syllabus!!
            </Typography>
            <div id='numerics' className='px-6 md:px-16  grid grid-cols-1 gap-5 sm:grid-cols-2 pb-24'>
                <div onClick={handleRevitMEPPdf} className=" cursor-pointer">
                    <AnimatedCard>
                        <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                            REVIT MEP
                        </Typography>
                        <SystemsList v1="Introduction to BIM and Autodesk Revit" v2="Sketching and Modifying Tools" v3="Modeling of MEPF Systems" v4="Quantification, Detailing, and Scheduling" v5="Tests,&nbsp;Certification,&nbsp;much&nbsp;more" />
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
                <div onClick={handleRevitStructPdf} className=" cursor-pointer">
                <AnimatedCard>
                    <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                        REVIT Structure
                    </Typography>
                    <SystemsList v1="Introduction to BIM and Autodesk Revit" v2="Sketching and Modifying Tools" v3="Starting and Modeling Structural Projects" v4="Quantification, Detailing, and Scheduling" v5="Tests,&nbsp;Certification,&nbsp;much&nbsp;more" />
                </AnimatedCard>
                </div>
                <div onClick={handleRevitArchPdf} className=" cursor-pointer">
                <AnimatedCard>
                    <Typography color="white" className=" text-gradient font-bold text-4xl md:text-5xl py-2">
                        REVIT Architecture
                    </Typography>
                    <SystemsList v1="Introduction to BIM and Autodesk Revit" v2="Sketching and Modifying Tools" v3="Modeling Architecture Projects" v4="Quantification, Detailing, and Scheduling" v5="Massing Tools, Tests, Certification, and Personality" />
                </AnimatedCard>
                </div>
                {/* <AnimatedCard>
                    <Typography color="white" variant="h1">
                        Revit Automation
                    </Typography>
                </AnimatedCard> */}
            </div>
        </>
    )
}