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
            <Card className="feature-card h-[40vh] w-full hover:scale-105 duration-300 flex justify-center items-center" ref={cardRef}>
                {children}
            </Card>
        </div>
    );
};

export const Courses = () => {

    return (
        <>
            <Typography color="white" variant="h1" className='text-center font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full py-12'>
                Best Programs
            </Typography>
            <div id='numerics' className='px-6 md:px-16  grid grid-cols-1 gap-5 sm:grid-cols-2 pb-24'>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        REVIT
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        MEP Design
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        BIM
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        Navisworks
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        Revit Automation
                    </Typography>
                </AnimatedCard>
                <AnimatedCard>
                    <Typography color="white" variant="h1">
                        Twinmotion
                    </Typography>
                </AnimatedCard>
            </div>
        </>
    )
}