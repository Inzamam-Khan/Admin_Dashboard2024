import { motion } from 'framer-motion'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { SALES_DATA } from '../../Constants'
import { useState } from 'react'


export const SalesOverviewAreaChart = () => {
    const [selectedTimeRange,setSelectedTimeRange]=useState("today")
    


    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>


                <div className="flex items-center justify-between mb-8">

                <h2 className='text-lg font-medium text-gray-100'>Sales Overview</h2>

                <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' value={selectedTimeRange} onChange={(e)=>setSelectedTimeRange(e.target.value)}> 
                    <option value="today" >Today</option>
                    <option value="this week">This Week</option>
                    <option value="this month">This Month</option>
                    <option value="this year">This Year</option>
                </select>
                </div>

            

            <div className="h-80 border">

                <ResponsiveContainer>

                    <AreaChart  data={SALES_DATA}>

                        <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
                       
                        <XAxis dataKey="name" stroke="#9ca3af"/>
                        <YAxis stroke="#9ca3af"/>
                        
                        <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",borderColor:"#485563"}}
                        itemStyle={{color:"#e5e7eb"}} />
                       
                        <Area type="monotone" dataKey="sales" stroke="#885cf6" fill="#8b5cf6"  fillOpacity={0.3} />
                    </AreaChart>


                </ResponsiveContainer>



            </div>


        </motion.div>

    )
}