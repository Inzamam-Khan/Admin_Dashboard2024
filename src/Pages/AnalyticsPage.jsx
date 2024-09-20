import {motion} from 'framer-motion'
import { Header } from '../Common/Header'

export const AnalyticsPage=()=>{
    return(
        <div className="flex-1 overflow-auto relative z-10">
            
        {/* header */}
        <Header title={"Analytics Dashboard"}/>

        {/* stat card */}
    <div className="max-w-7xl mx-auto border py-6 px-4 lg:px-8">
        
        <motion.div 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
         className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                 {/* <StatCard name="Total Orders" icon={BiShoppingBag} value={'1,345'} color={"#6366f1"}/>       
                 <StatCard name="Pending Orders" icon={BsClock} value={'211'} color={"#8b5cf6"}/>       
                 <StatCard name="Completed Ordes" icon={BiCheckCircle} value={'1,134'} color={"#10b981"}/>       
                 <StatCard name="Total Revenue" icon={FaDollarSign} value={'$98,574'} color={"#ec4899"}/>        */}
                 
        </motion.div>

        </div>
        </div>
    )
}