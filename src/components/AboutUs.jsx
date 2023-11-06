import sumair from '../assets/sumair.jpeg';
import ahemad from '../assets/ahamed.jpeg';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';

const AboutUs = () => (
    <>
        <Typography color="white" variant="h2" className='flex items-center justify-center pt-20'><div className='text-gradient'>About Us</div></Typography>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-10 lg:px-4 2xl:px-20 py-20'>
            <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ml-5 feedback-card">
                {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
                <BookmarkIcon className='w-[42.6px] h-[27.6px] object-contain text-blue-400 ' />
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
                    Mr. Sumair, is Masters in Civil Engineering, has proven and progressive experience in business development,
                    project
                    management and BIM with consulting and contracting firm.
                    Presently, he is the Manager of
                    BIM/VDC and Business
                    Development
                    departments
                    of Engineering
                    in Virtual
                    Built
                    Consultants Pvt. Ltd. (ENG VB), where they deal in MEP, Digital Twin and BIM Consultancy Services for Indian and overseas clients with a team of over 75 experienced and qualified employees.
                </p>

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
            <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
                <BookmarkIcon className='w-[42.6px] h-[27.6px] object-contain text-blue-400 '  />
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
                    Mr. Ahmed is the Co-founder and Director at ENG VB one of the leading BIM Consultants.
                    A Mechanical
                    engineering and P.G.
                    diploma in H.V.A.C. his leadership enabled his firm to become leading MEP services provider on BIM platform. He is first from India to complete
                    "COBie As-Designed"
                    course
                    from the
                    University of Florida directed By the Inventor Dr. Bill East.
                </p>

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
        </div>
    </>
);


export default AboutUs;