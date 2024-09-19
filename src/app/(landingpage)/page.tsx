import BannerSignup from "@/components/organisms/BannerSignup";
import Category from "@/components/organisms/category";
import Client from "@/components/organisms/clients";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import Hero from "@/components/organisms/hero";
import LatestJob from "@/components/organisms/LatestJob";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
            <Image src="/images/pattern.png" alt="/images/pattern.png" fill/>
      </div>
      <div className="px-32 mb-10">
        <Hero />
        <Client />
        <Category />
        <BannerSignup />
        <FeaturedJobs />
        <LatestJob />
      </div>
    
    </>
  );
}
