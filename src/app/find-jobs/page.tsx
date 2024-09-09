"use client";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { useForm } from "react-hook-form";
import { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

export default function FindJobsPage() {
    const formFilter = useForm<z.infer<typeof formFilterSchema>>({
        resolver: zodResolver(formFilterSchema)
    })

    const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => console.log(val);
    return (
       <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter}  />
    )
}