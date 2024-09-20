import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ORDER_STATUS,  } from "../../Constants"
import { motion } from "framer-motion"


const COLORS=[
    "#8884d8",
    "#82ca9d",
    "#ec4899",
    "#0088fe",
]


export const OrdersDistributionPieChart=()=>{
    return(
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.4}}>
         
         <h2 className='text-lg font-medium mb-4 text-gray-100'>Orders Category</h2>
 
         <div className="h-80">
 
             <ResponsiveContainer>
             <PieChart>
                     <Pie data={ORDER_STATUS} 
                     cx={"50%"}
                     cy={"50%"}
                     labelLine={true}
                     outerRadius={80}
                     fill="#8884d8"
                     dataKey='value'
                     label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
                     >
                         {ORDER_STATUS.map((entry,index)=>(
                             <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                         ))}
 
                     </Pie>
                
 
                     <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",
                         borderStyle:"#485563"
                     }}itemStyle={{color:'#e5e7eb'}}/>
                     <Legend/>
                 </PieChart>
             </ResponsiveContainer>
 
 
         </div>
 
         </motion.div>
    )
}