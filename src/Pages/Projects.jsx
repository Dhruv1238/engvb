import { Footer } from "../components/Footer";
import { NavbarSimple } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import proj1 from "../assets/proj1.jpeg"
import proj2 from "../assets/proj2.jpeg"

export const Projects = () => {
    return (
        <>
            <NavbarSimple />
            <div className="grid grid-cols-3 gap-10 p-10">
                <div className="col-span-3 md:col-span-2 md:col-start-1">
                    <ProjectContainer image={proj1} title="SANT NIRANKARI HOSPITAL"
                        desc="Location: Delhi

                    Built-up Area: 11,37,221 Sft
                    
                    Type: Hospital 
                    
                    Scope: BIM - MEPF Upto LOD 350, Clash Detection, Quantification
                    
                    Status: Ongoing"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 md:col-start-2">
                    <ProjectContainer image={proj2} title="HEAD AND NECK CANCER HOSPITAL"
                        desc="Location: Mumbai

                        Built-up Area: 1,50,000 Sft
                        
                        Type: Hospital 
                        
                        Scope: MEP – MEP Design,   BIM – LOD 350 (Architectural, Structural, MEPF), Clash Detection, Quantification.
                        
                        Status: Completed"
                    />
                </div>
            </div>

            <Footer />
        </>
    )
};
