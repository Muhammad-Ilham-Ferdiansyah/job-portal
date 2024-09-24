"use client"
import TitleSection from "@/components/atoms/TitleSection";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingFeaturedJobs } from "@/lib/utils";
import { JobType } from "@/types";

interface FeaturedJobsProps {
    
}
 
const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
    const {data, isLoading, error} = useSWR('/api/job/featured', fetcher);
    const [featuredJobs, setFeaturedJobs] = useState<JobType[]>([]);
    const parseFeaturedJobs = useCallback(async () => {
        const parseData = await parsingFeaturedJobs(data, isLoading, error);
        setFeaturedJobs(parseData);
    },[data, isLoading, error]);
    // const featuredJobs = useMemo(() => parsingFeaturedJobs(data, isLoading, error), [data, isLoading, error]);

    useEffect(() => {
        parseFeaturedJobs();
    }, [data, isLoading, error]);

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