import { Typography } from "@material-tailwind/react";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const AnimatedDiv = ({ children }) => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    const divRef = useRef(null);

    useEffect(() => {
        if (inView) {
            divRef.current.classList.add('slide-in');
        } else {
            divRef.current.classList.remove('slide-in');
        }
    }, [inView]);
    return (
        <div ref={ref}>
            <div ref={divRef} className='feature-div flex flex-col sm:flex-row sm:justify-between items-start px-6 lg:px-16 '>
                {children}
            </div>
        </div>
    );
};

export const Facilities = () => {

    return (
        <>
            <AnimatedDiv>
                <div className='flex item-center gap-2 justify-center slide-in'>
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>Online/Offline Training</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient m-3'>Online/Offline Training</div></Typography>
                    </div>
                </div>
                <div className='flex item-center gap-2 justify-center '>
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>Site visits to get Hands-on Experience</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient m-3'>Site visits to get Hands-on Experience</div></Typography>
                    </div>
                </div>
                <div className='flex item-center gap-2 justify-center '>
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>Convenient Batch Timings</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient m-3'>Convenient Batch Timings</div></Typography>
                    </div>
                </div>
            </AnimatedDiv>
        </>
    )
};