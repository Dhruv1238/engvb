import { Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const RollingNumbers = ({ value, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            const timer = setInterval(() => {
                setCount((prevCount) => {
                    const diff = value - prevCount;
                    const inc = Math.ceil(diff / 10);
                    return prevCount + (diff > inc ? inc : diff);
                });
            }, 60);
            return () => clearInterval(timer);
        }
    }, [value, inView]);

    useEffect(() => {
        if (!inView) {
            setCount(0); // reset count when out of view
        }
    }, [inView]);

    return (
        <>
            <div className='lg:block hidden'>
                <Typography color="white" variant="h1">
                    {count}
                </Typography>
            </div>
            <div className='lg:hidden'>
                <Typography color="white" variant="h2">
                    {count}
                </Typography>
            </div>
        </>
    );
}


export const Numerics = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });

    console.log(inView);

    return (
        <>

            <div ref={ref} className=' flex flex-col sm:flex-row sm:justify-between items-start px-6 lg:px-16 mt-10'>
                <div className='flex item-center gap-2 justify-center '>
                    <RollingNumbers value={200} inView={inView} />
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>+ Projects Completed</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient'>+ Projects Completed</div></Typography>
                    </div>
                </div>
                <div className='flex item-center gap-2 justify-center '>
                    <RollingNumbers value={15} inView={inView} />
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>+ Years Experienced Staff</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient'>+ Years Experienced Staff</div></Typography>
                    </div>
                </div>
                <div className='flex item-center gap-2 justify-center '>
                    <RollingNumbers value={100} inView={inView} />
                    <div className='hidden lg:flex lg:justify-center lg:items-center'>
                        <Typography color="white" variant="h3" className='flex items-center'><div className='text-gradient'>% Placement Assistance</div></Typography>
                    </div>
                    <div className='lg:hidden flex justify-center '>
                        <Typography color="white" variant="h5" className='flex items-center'><div className='text-gradient'>% Placement Assistance</div></Typography>
                    </div>
                </div>
            </div>
        </>
    );
};