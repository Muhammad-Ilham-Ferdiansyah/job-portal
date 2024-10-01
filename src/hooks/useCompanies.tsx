import { fetcher, parsingCompanies } from "@/lib/utils";
import { CompanyType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";


const COMPANY_PATH = '/api/company/filter';

const useCompanies = (filter?: string[]) => {
    const paramsCategory = useMemo(() => {
        if (filter && filter.length > 0){
            return filter.join(',')
        }
        return "";
    },[filter])

    
    const {data, isLoading, error, mutate} = useSWR(`${COMPANY_PATH}?category=${paramsCategory}`, fetcher, { 
        revalidateOnMount: false 
    });

    const [companies, setCompanies] = useState<CompanyType[]>([]);

    // console.log(data);

    const parseJobs = useCallback( async () => {
        const parseData = await parsingCompanies(data, isLoading, error);
        console.log(parseData);
        setCompanies(parseData);
    }, [data, isLoading, error])

    useEffect(() => {
        parseJobs();
    },[data, isLoading, error]);

    return {
        companies,
        isLoading,
        mutate
    }
}

export default useCompanies;