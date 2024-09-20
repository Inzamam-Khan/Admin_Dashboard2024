import { FiAlertTriangle, FiBarChart2, FiZap } from "react-icons/fi"
import { Header } from "../Common/Header"
import { StatCard } from "../Common/StatCard"
import {motion} from 'framer-motion'
import { FaDollarSign, FaUsers } from "react-icons/fa"
import { BiPackage, BiShoppingBag, BiTrendingUp } from "react-icons/bi"
import { ProductTable } from "../Components/Products/ProductTable"
import { CategoryDistributionChart } from "../Components/overview/CategoryDistributionChart"
import { SalesTrendChart } from "../Components/Products/SalesTrendChart"

export const ProductsPage=()=>{
    return(
      <div className="flex-1 overflow-auto relative z-10">
       
        <Header title="Products"/>


        <div className="max-w-7xl mx-auto  py-6 px-4 lg:px-8">
            
            <motion.div 
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
             className=" border-red-500 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">

                     <StatCard name="Total Products" icon={BiPackage} value={'$12,345'} color={"#6366f1"}/>       
                     <StatCard name="Top Selling" icon={BiTrendingUp} value={'1,345'} color={"#8b5cf6"}/>       
                     <StatCard name="Low Stock" icon={FiAlertTriangle} value={'$12,345'} color={"#ec4899"}/>       
                     <StatCard name="Total Revenue" icon={FaDollarSign   } value={'$12,345'} color={"#10b981"}/>       
                     
            </motion.div>


            {/* products Table */}
            <ProductTable/>


            {/* charts */}

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            <SalesTrendChart/>
            
            <CategoryDistributionChart/>

            </div>

           



        </div>

      </div>
    )
}