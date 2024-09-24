"use client"
import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import JobItem from "./JobItem";
import { JobType } from "@/types";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";

interface FeaturedJobsProps {
    
}
 
const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
    const {featuredJobs, isLoading, error} = useFeaturedJobs();
    
    return ( 
        <div className="mt-32 mb-10 ">
            <TitleSection word1="Featured" word2="jobs" />
            <div className="grid grid-cols-4 gap-8 mt-12">
                {featuredJobs.map((item: JobType) => (
                    // <JobItem key={item.id} id={item.id} needs={item.needs} image={item.image} jobType={item.jobType} name={item.name} type={item.type} location={item.location} desc={item.desc} categories={item.categories} applicants={item.applicants} />
                    <JobItem key={item.id} {...item}/>
                ))}
                
            </div>
        </div>
     );
}
 
export default FeaturedJobs;