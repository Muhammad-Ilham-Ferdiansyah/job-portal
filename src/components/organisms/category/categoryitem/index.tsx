import { FC } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CategoryItemProps {
    name: string;
    totalJob: number;
}
 
const CategoryItem: FC<CategoryItemProps> = ({ name, totalJob}) => {
    return (  
        <div className="border border-border rounded-lg p-8 cursor-pointer transition-colors group hover:border-primary hover:bg-primary hover:text-white">
            <BiCategory className="w-12 h-12 text-primary group-hover:text-white" />
            <div className="mt-7 ">
                <div className="text-2xl font-semibold">
                    {name}
                </div>
                <div className="text-muted-foreground inline-flex items-center gap-1 mt-1 group-hover:text-white">
                    <span>{totalJob} jobs available</span>
                    <HiOutlineArrowNarrowRight className="hover:text-white " />
                </div>
            </div>
        </div>
    );
}
 
export default CategoryItem;