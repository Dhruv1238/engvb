import sumair from '../assets/sumair.jpeg';
import ahemad from '../assets/ahamed.jpeg';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import { Element } from 'react-scroll';

const AboutUs = () => (
    <>
        <Typography color="white" variant="h2" className='flex items-center justify-center pt-20'><div className='text-gradient'>About Us</div></Typography>
        <div id='aboutus' className=' grid grid-cols-1 md:grid-cols-2 gap-5 px-1 md:px-10 lg:px-4 2xl:px-20 py-20'>
            <div className="flex justify-between flex-col px-5 py-12 rounded-[20px] md:mr-10 sm:mr-5 m-5 feedback-card">
                {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
                <BookmarkIcon className='w-[42.6px] h-[27.6px] object-contain text-blue-400 ' />
                <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                    <p className="font-poppins font-normal md:text-[18px] leading-[32.4px] text-white my-10">
                        Mr. Ahmed is the Co-founder and Director at ENG VB one of the leading BIM Consultants.
                        A Mechanical
                        engineering and P.G.
                        diploma in H.V.A.C. his leadership enabled his firm to become leading MEP services provider on BIM platform. He is first from India to complete
                        "COBie As-Designed"
                        course
                        from the
                        University of Florida directed By the Inventor Dr. Bill East.
                    </p>
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className="flex flex-row">
                    <img src={ahemad} alt="sustum" className="w-[78px] h-[78px] rounded-full" />
                    <div className="flex flex-col ml-4">
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                            Mr.Ahamed Rumane
                        </h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                            Director, ENG VB
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-col px-5 py-12 rounded-[20px]  md:mr-10 sm:mr-5 m-5 feedback-card">
                {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
                <BookmarkIcon className='w-[42.6px] h-[27.6px] object-contain text-blue-400 ' />

                <div className={`flex-1 flex justify-center items-center md:my-0 relative`}>
                    <p className="font-poppins font-normal md:text-[18px] leading-[32.4px] text-white my-10">
                        Mr. Sumair, is Masters in Civil Engineering, has proven and progressive experience in business development,
                        project
                        management and BIM with consulting and contracting firm.
                        Presently, he is the Director of
                        BIM/VDC, Operations and Business
                        Development
                        departments
                        of Engineering
                        in Virtual
                        Built
                        Consultants Pvt. Ltd. (ENG VB), where they deal in MEP, Digital Twin and BIM Consultancy Services for Indian and overseas clients with a team of over 75 experienced and qualified employees.
                    </p>
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>


                <div className="flex flex-row">
                    <img src={sumair} alt="sustum" className="w-[78px] h-[78px] rounded-full" />
                    <div className="flex flex-col ml-4">
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                            Mr.Sumair Maste
                        </h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                            Director, ENG VB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);


export default AboutUs;