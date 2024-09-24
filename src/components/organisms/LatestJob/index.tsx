"use client"
import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface LatestJobProps {
    
}
 
const LatestJob: FC<LatestJobProps> = ({}) => {
    const {featuredJobs, isLoading, error} = useFeaturedJobs();
    return ( 
        <div className="py-16 mt-32 mb-10 relative">
            <TitleSection word1="Latest" word2="jobs open" />
            <div className="mt-12 grid grid-cols-3 gap-8">
                {featuredJobs.map((item: JobType) => (
                    <JobItem key={item.id} {...item} />
                ))}
            </div>
        </div>
     );
}
 
export default LatestJob;