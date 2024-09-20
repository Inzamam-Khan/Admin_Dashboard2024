import { FiBarChart2, FiZap } from "react-icons/fi"
import { Header } from "../Common/Header"
import { StatCard } from "../Common/StatCard"

import { motion } from "framer-motion"
import { FaUsers, FaUserSlash } from "react-icons/fa"
import { BiShoppingBag } from "react-icons/bi"
import { SalesOverviewChart } from "../Components/overview/SalesOverviewChart"
import { CategoryDistributionChart } from "../Components/overview/CategoryDistributionChart"
import { SalesChannelChart } from "../Components/overview/SalesChannelChart"

export const OverviewPage=()=>{
    return(
        <div className="flex-1 overflow-auto relative z-10">
            
            {/* header */}
            <Header title={"Overview"}/>

            {/* stat card */}
        <div className="max-w-7xl mx-auto border py-6 px-4 lg:px-8">
            
            <motion.div 
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
             className=" border-red-500 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                     <StatCard name="Total Sales" icon={FiZap} value={'$12,345'} color={"#6366f1"}/>       
                     <StatCard name="New Users" icon={FaUsers} value={'1,345'} color={"#8b5cf6"}/>       
                     <StatCard name="Total Products" icon={BiShoppingBag} value={'$12,345'} color={"#ec4899"}/>       
                     <StatCard name="Conversion Rate" icon={FiBarChart2} value={'$12,345'} color={"#10b981"}/>       
                     
            </motion.div>

            <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 mb-8">
                <SalesOverviewChart/>
                <CategoryDistributionChart/>
                   
            </div>
            <SalesChannelChart/> 
            



        </div>
            
        </div>
    )
}