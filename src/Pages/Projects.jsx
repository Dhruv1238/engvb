import { Footer } from "../components/Footer";
import { NavbarSimple } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import proj1 from "../assets/proj1.jpeg"
import proj2 from "../assets/proj2.jpeg"
import proj3 from "../assets/proj3.jpeg"
import proj4 from "../assets/proj4.jpeg"
import proj5 from "../assets/proj5.jpeg"
import proj6 from "../assets/proj6.jpeg"
import proj7 from "../assets/proj7.jpeg"
import proj8 from "../assets/proj8.jpeg"

export const Projects = () => {
    return (
        <>
            <NavbarSimple />
            <div className="grid grid-cols-3 gap-10 p-10">
                <div className="col-span-3 md:col-span-2 md:col-start-1">
                    <ProjectContainer image={proj8} title="65 Storey High Rise Residential Tower at Mumbai"
                        desc="Client Name: Military Engineer Services

                        Location: Mumbai
                        
                        Built-up Area: 9,00,000 Sft
                        
                        Type: Residential High Rise Tower (65 Floors)
                        
                        Scope: MEP – MEP Design, BIM – LOD 350 (Architectural, Structural, MEPF), Clash Detection, Quantification, Quantification re -cancellation
                        
                        Status: Completed"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 md:col-start-2">
                    <ProjectContainer image={proj7} title="ARIHANT ASPIRE"
                        desc="Client Name: Arihant Group

                        Location: Navi Mumbai
                        
                        Built-up Area: 38,00,000 Sft
                        
                        Type: Residential Tower 
                        
                        Scope: MEP & Infrastructure Planning
                        
                        Status: Ongoing"
                    />
                </div>
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
                <div className="col-span-3 md:col-span-2 md:col-start-1">
                    <ProjectContainer image={proj3} title="CHANDAK GROUP RESIDENTIAL PROJECT"
                        desc="Location: Mumbai

                        Built-up Area: 23,29,017 Sft
                        
                        Type: Residential Tower (23 Floors)
                        
                        Scope: MEP – MEP Design    BIM – LOD 350, (Architectural, Structural, MEPF), 	Clash Detection, Quantification
                        
                        Status: Ongoing"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 md:col-start-2">
                    <ProjectContainer image={proj4} title="TRUMP TOWER"
                        desc="Client Name: M3M

                        Location: Delhi NCR
                        
                        Built-up Area: 16,00,000 Sft
                        
                        Type: Residential High Rise Tower 47 Floors)
                        
                        Scope: BIM – LOD 350 (Architectural, Structural, MEPF, Clash Detection, Quantification, Quantification re–cancellation)
                        
                        Status: Ongoing"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 md:col-start-1">
                    <ProjectContainer image={proj5} title="LODHA WHITE CITY"
                        desc="Client Name: Lodha Group

                        Location: Mumbai
                        
                        Built-up Area: 10,60,000 Sft
                        
                        Type: Residential Towers, MLCP, Infra
                        
                        Scope: MEP – MEP Design,   BIM – LOD 350 (Architectural, Structural, MEPF), Clash Detection, Quantification.
                        
                        Status: Ongoing"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 md:col-start-2">
                    <ProjectContainer image={proj6} title="Shree Complex Developers"
                        desc="Client Name: Vikas Developer

                        Location: Kalyan
                        
                        Built-up Area: 12,00,000 Sft
                        
                        Type: Residential Tower 
                        
                        Scope: MEP – MEP Design, BIM – LOD 350 (Architectural, Structural, MEPF), Clash Detection, Quantification
                        
                        Status: Ongoing"
                    />
                </div>
            </div>

            <Footer />
        </>
    )
};
