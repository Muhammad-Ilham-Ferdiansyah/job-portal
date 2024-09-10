"use client"
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface FindCompaniesPageProps {
    
}

const FILTER_FORMS: filterFormType[] = [
    {
        name: 'industry',
        label: 'Industry',
        items: CATEGORIES_OPTIONS
    },
];

const dataDummy: CompanyType[] = [
    {
        image: "/images/company2.png",
        categories: "Marketing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro? Iusto nam error doloribus possimus, rem velit alias placeat ullam suscipit ipsum tenetur blanditiis quia accusamus nostrum ex hic? Dolorum aliquam et distinctio temporibus recusandae. Nam harum placeat dicta, quas, suscipit consequatur debitis natus perferendis ducimus accusamus minima sapiente rerum? Consequatur cum nostrum beatae unde possimus rem recusandae reiciendis, voluptates at sit odio veritatis incidunt eum aut quidem? Nobis ipsum possimus quod reiciendis atque dolore perferendis cum nihil quis eligendi vitae fugiat, temporibus ad magnam facere deleniti! Magnam praesentium deserunt est ullam. Hic eaque minima pariatur harum dolor, incidunt natus!",
        name: "Twitter",
        totalJobs: 10
    }
];


 
const FindCompaniesPage: FC<FindCompaniesPageProps> = ({ }) => {
    const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
        resolver: zodResolver(formFilterCompanySchema),
        defaultValues: {
            industry: []
        }
    });

    const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
        console.log(val);
    }
    return ( 
        <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmit} filterForms={FILTER_FORMS} title="dream companies" subtitle="Find the dream companies you dream work for." loading={false} type='company' data={dataDummy}/>
     );
}
 
export default FindCompaniesPage;