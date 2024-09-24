import { fetcher, parsingFeaturedJobs } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = () => {
    const {data, isLoading, error} = useSWR('/api/job/featured', fetcher);
    const [featuredJobs, setFeaturedJobs] = useState<JobType[]>([]);
    const parseFeaturedJobs = useCallback(async () => {
        const parseData = await parsingFeaturedJobs(data, isLoading, error);
        setFeaturedJobs(parseData);
    },[data, isLoading, error]);
    
    useEffect(() => {
        parseFeaturedJobs();
    }, [data, isLoading, error]);

    return {
        featuredJobs,
        isLoading,
        error
    }
}

export default useFeaturedJobs