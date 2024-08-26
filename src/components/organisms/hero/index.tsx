import Image from "next/image";
import { FC } from "react";
import SearchForm from "../SearchForm";

interface HeroProps {
    
}
 
const Hero: FC<HeroProps> = () => {
    return ( 
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2">
                <div className="text-7xl font-semibold text-slate-600 w-max relative">
                    Discover <br /> more than <br />
                    <span className="text-primary">5000+ Jobs</span>
                </div>
                <Image src="/images/pattern2.png" alt="/images/pattern2.png" width={455} height={32} className="mb-5"/>
                <div className="text-muted-foreground text-lg">
                    Great platform for the job seeker that searching for <br />
                    new career heights and passionate about startups.
                </div>
                <SearchForm />
            </div>
            <div className="block mt-2">
                <Image src="/images/hero2.jpg" alt="/images/hero2.jpg" width={571} height={610} objectFit="contain" className="rounded-xl"/>
            </div>
        </div>
     );
}
 
export default Hero;