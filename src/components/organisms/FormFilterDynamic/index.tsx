import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FC } from "react";
import CheckBoxForms from "./CheckBoxForms";

interface FormFilterDynamicProps {
    formFilter: any;
    onSubmitFilter: (val: any) => Promise<void>
    filterForms: any[]
}

const items = [
    {
      id: "recents",
      label: "Recents",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];
 
const FormFilterDynamic: FC<FormFilterDynamicProps> = ({ formFilter, onSubmitFilter, filterForms}) => {
    return ( 
        <Form {...formFilter}>
            <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
                <CheckBoxForms formFilter={formFilter} items={items} label="Categories" name="categories"/>
            </form>
        </Form>
     );
}
 
export default FormFilterDynamic;