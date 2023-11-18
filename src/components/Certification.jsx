import { Typography } from "@material-tailwind/react";


const Certifications = () => (
    <>
        <div className="py-20 mx-7">
            <Typography className="text-center text-xl md:text-4xl font-bold text-white py-5">
                Unleash your potential, then frame it.
            </Typography>
            <Typography className="text-center  text-xl md:text-4xl font-bold text-white">
                Earn certificates that reflect your brilliance.
            </Typography>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-10">
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/iso_9001.png" alt="Autodesk Certified Logo" className="h-52" />
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/iso_2993.png" alt="Autodesk Certified Logo" className="h-40" />
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/images/autodesk-certified-logo.png" alt="Autodesk Certified Logo" className="h-40 w-40" />
                </div> */}
            </div>
        </div>
    </>
);

export default Certifications;