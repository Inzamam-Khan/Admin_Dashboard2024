
import {motion}from 'framer-motion'
import { PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend } from "recharts"
import { CATEGORY_DATA, USER_DEMOGRAPHIC_DATA } from "../../Constants"


const COLORS=["#6366f1","#885cf6","#ec4899","#10b981","#f59e08"]
export const UserDemographicsChart=()=>{
    return(
        <motion.div className="bg-gray-80 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
       initial={{opacity:0,y:20}}    
       animate={{opacity:1,y:0}}
       transition={{delay:0.3}}>

        <h2 className="text-center text-lg font-medium mb-4 text-gray-100">Users Distribution</h2>


        <div className="h-80 ">


            <ResponsiveContainer>


            <PieChart>
                    <Pie data={USER_DEMOGRAPHIC_DATA} 
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey='value'
                    label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {USER_DEMOGRAPHIC_DATA.map((entry,index)=>(
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