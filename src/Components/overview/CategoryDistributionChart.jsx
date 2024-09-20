import { motion } from "framer-motion"
import { PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend } from "recharts"
import { CATEGORY_DATA } from "../../Constants"




export const CategoryDistributionChart=()=>{


    const COLORS=["#6366f1","#885cf6","#ec4899","#10b981","#f59e08"]

    return(
       <motion.div className="bg-gray-80 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.3}}>

        <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>

        <div className="h-80 ">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                    <Pie data={CATEGORY_DATA} 
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey='value'
                    label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {CATEGORY_DATA.map((entry,index)=>(
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