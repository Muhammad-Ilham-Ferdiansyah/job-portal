import { Form } from "@/components/ui/form";
import { FC } from "react";
import CheckBoxForms from "./CheckBoxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
    formFilter: any;
    onSubmitFilter: (val: any) => Promise<void>
    filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({ formFilter, onSubmitFilter, filterForms}) => {
    return ( 
        <Form {...formFilter}>
            <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
                {filterForms.map((item: filterFormType, i: number) => (
                    <CheckBoxForms key={i} formFilter={formFilter} items={item.items} label={item.label} name={item.name}/>
                ))}
                <Button className="mt-5 w-full">Apply Filter</Button>
                <Button variant="outline" className="mt-3 w-full">Reset Filter</Button>
            </form>
        </Form>
     );
}
 
export default FormFilterDynamic;