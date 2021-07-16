import { UserIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import SidebarRow from '../components/SidebarRow';

import {    
    ShoppingBagIcon,
    ChevronDownIcon,
    UserGroupIcon,    
} from '@heroicons/react/outline';

import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,    
} from '@heroicons/react/solid'



function Sidebar() {
const [session,loading] =useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow Icon={UsersIcon} title="Freinds" />      
        <SidebarRow Icon={UserGroupIcon} title="Groups" />      
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />      
        <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>      
        <SidebarRow Icon={CalendarIcon} title="Events" />      
        <SidebarRow Icon={ClockIcon} title="Memories" />      
        <SidebarRow Icon={ChevronDownIcon} title="See more" /> 
                   
        </div>
    )
}

export default Sidebar
