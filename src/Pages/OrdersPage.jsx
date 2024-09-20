
import { BiCheckCircle, BiShoppingBag } from "react-icons/bi"
import { Header } from "../Common/Header"
import { StatCard } from "../Common/StatCard"
import {motion} from 'framer-motion'
import { BsClock } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"
import { MonthlyOrdersLineChart } from "../Components/Orders/DailyOrders"
import { OrdersDistributionPieChart } from "../Components/Orders/OrderDistribution"
import { OrdersListTable } from "../Components/Orders/OrdersListTable"


export const OrdersPage=()=>{
    return(
        <div className="flex-1 overflow-auto relative z-10">
            
        {/* header */}
        <Header title={"Orders Dashboard"}/>

        {/* stat card */}
    <div className="max-w-7xl mx-auto border py-6 px-4 lg:px-8">
        
        <motion.div 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
         className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                 <StatCard name="Total Orders" icon={BiShoppingBag} value={'1,345'} color={"#6366f1"}/>       
                 <StatCard name="Pending Orders" icon={BsClock} value={'211'} color={"#8b5cf6"}/>       
                 <StatCard name="Completed Ordes" icon={BiCheckCircle} value={'1,134'} color={"#10b981"}/>       
                 <StatCard name="Total Revenue" icon={FaDollarSign} value={'$98,574'} color={"#ec4899"}/>       
                 
        </motion.div>

            {/* orders chart */}
       
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8"> 
                <MonthlyOrdersLineChart/>
                <OrdersDistributionPieChart/>
                <OrdersListTable/>

        </div> 

        </div>
        </div>

    )
}