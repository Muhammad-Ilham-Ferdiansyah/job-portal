import { signOut, useSession } from "next-auth/react";
import { FC } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { BiLogOut, BiSolidDownArrow } from "react-icons/bi";
  

interface MenuAuthProps {
    
}
 
const MenuAuth: FC<MenuAuthProps> = ({}) => {
    const {data: session} = useSession();
    return ( 
        <div>
           <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="inline-flex items-center gap-1 cursor-pointer">
                        <div className="font-semibold text-primary mr-2">
                            Hi, {session?.user.name}
                        </div>
                        <BiSolidDownArrow className="text-sm text-primary" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => signOut()} className="text-red-500 font-semibold"><BiLogOut/> Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}
 
export default MenuAuth;