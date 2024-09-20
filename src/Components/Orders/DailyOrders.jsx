import {motion } from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { SALES_DATA } from '../../Constants'


export const MonthlyOrdersLineChart=()=>{
    return(
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.4}}>
         
         <h2 className='text-lg font-medium mb-4 text-gray-100'>Monthly Orders</h2>
 
 
         <div className="h-80 ">

             <ResponsiveContainer width={"100%"} height={"100%"}>
 
                 <LineChart data={SALES_DATA}>

 
                     <CartesianGrid strokeDasharray='3 3' stroke='#4b5563'/>
                     <XAxis dataKey={"name"} stroke='#9ca3af'/>

                     <YAxis stroke='#9ca3af'/>
                     <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",
                         borderStyle:"#485563"
                     }}itemStyle={{color:'#e5e7eb'}}/>
                     <Line type="monotone"
                     dataKey={'sales'}
                     stroke='#6366f1'
                     strokeWidth={2}
                     dot={{fill:"#6366f1" ,strokeWidth:2,r:4}}
                     activeDot={{r:7}}/>
 
                 </LineChart>
 
             </ResponsiveContainer>
         </div>
 
        </motion.div>
    )
}