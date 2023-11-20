import { Typography, Carousel } from "@material-tailwind/react"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.jpg"
import client5 from "../assets/client5.jpg"


export const Clients = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10">
                <Typography variant="h1" color="white">
                    Our Prestige Clients
                </Typography>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-10">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src={client1} alt="Autodesk Certified Logo" className="h-40" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src={client2} alt="Autodesk Certified Logo" className="h-40 w-40" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src={client3} alt="Autodesk Certified Logo" className="h-40" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 ">
                        <img src={client4} alt="Autodesk Certified Logo" className="h-40" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src={client5} alt="Autodesk Certified Logo" className="h-40 w-40" />
                    </div>
                </div>
            </div>
        </>
    )
}