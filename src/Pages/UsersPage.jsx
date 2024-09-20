import { Header } from "../Common/Header"
import {motion } from 'framer-motion'
import { StatCard } from "../Common/StatCard"
import { BiPackage, BiTrendingUp, BiUserCheck, BiUserCircle, BiUserPlus, BiUserX } from "react-icons/bi"
import { FiAlertTriangle } from "react-icons/fi"
import { FaDollarSign } from "react-icons/fa"
import { ProductTable } from "../Components/Products/ProductTable"
import { UsersTable } from "../Components/Users/UsersTable"
import { UserGrowthChart } from "../Components/Users/UserGrowthChart"
import { UserActivityBarChart } from "../Components/Users/UserActivityBarChart"
import { UserDemographicsChart } from "../Components/Users/UserDemographicsChart"
export const UsersPage=()=>{
    return(
        <div className="flex-1 overflow-auto relative z-10">

            <Header title={"Users"}/>


            <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 border">


            <motion.div 
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
             className=" border-red-500 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                     <StatCard name="Total Users" icon={BiUserCircle} value={'22,345'} color={"#6366f1"}/>       
                     <StatCard name="New Users" icon={BiUserPlus} value={'1,345'} color={"#8b5cf6"}/>       
                     <StatCard name="Active Users" icon={BiUserCheck} value={'12,345'} color={"#10b981"}/>       
                     <StatCard name="Churn Rate" icon={BiUserX   } value={'2,345'} color={"#ec4899"}/>       
                     
            </motion.div>


            <UsersTable/>


            {/* user charts */}


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">

            <UserGrowthChart/>
            <UserActivityBarChart/>
            <UserDemographicsChart/>

            </div>


            </div>

        </div>
    )

}