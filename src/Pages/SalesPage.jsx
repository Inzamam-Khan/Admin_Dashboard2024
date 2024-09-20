import { FiBarChart2, FiZap } from "react-icons/fi"
import { Header } from "../Common/Header"
import { StatCard } from "../Common/StatCard"
import {motion} from 'framer-motion'
import { FaUsers } from "react-icons/fa"
import { BiDollar, BiShoppingBag, BiTrendingUp } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
import { BsCardHeading, BsCardImage } from "react-icons/bs"
import { SalesOverviewAreaChart } from "../Components/Sales/SalesOverviewAreaChart"
import {SalesByCategoryPieChart } from "../Components/Sales/SalesByCategoryPieChart"
import { DailySalesTrendBarChart } from "../Components/Sales/DailySalesTrendBarChart"
export const SalesPage=()=>{
    return(
        <div className="flex-1 overflow-auto relative z-10">
            
        {/* header */}
        <Header title={"Sales Dashboard"}/>

        {/* stat card */}
    <div className="max-w-7xl mx-auto border py-6 px-4 lg:px-8">
        
        <motion.div 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
         className="border border-red-500 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                 <StatCard name="Total Revenue" icon={BiDollar} value={'$1,21,345'} color={"#6366f1"}/>       
                 <StatCard name="Avg.Order Value" icon={CgShoppingCart} value={'$12,345'} color={"#8b5cf6"}/>       
                 <StatCard name="Conversion Rate" icon={BiTrendingUp} value={'2.45%'} color={"#10b981"}/>       
                 <StatCard name="Sales Growth" icon={BsCardHeading} value={'12.25%'} color={"#ec4899"}/>       
                 
        </motion.div>

            {/* sales chart */}
       
        <SalesOverviewAreaChart/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8"> 
                <SalesByCategoryPieChart/>
                <DailySalesTrendBarChart/>

        </div>

        </div>
        </div>

    )
}