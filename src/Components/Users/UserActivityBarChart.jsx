
import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { SALES_DATA } from '../../Constants'



const COLORS = ["#6366f1", "#885cf6", "#ec4899", "#10b981", "#f59e08"]

export const UserActivityBarChart = () => {
    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>

            <h2 className='text-lg font-medium mb-4 text-gray-100'>Users Acivity</h2>


            <div className='h-80 '>
                <ResponsiveContainer width={"100%"} height={"100%"} className="border">

                    <BarChart data={SALES_DATA}>
                        <CartesianGrid stroke="#4b5563" strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31,41,55,0.8)",
                            borderStyle: "#485563"
                        }} itemStyle={{ color: '#e5e7eb' }} />


                        <Bar type="monotone" dataKey="sales" fill="#8884d8" barSize={30}>
                                {SALES_DATA.map((item,index)=>(
                                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                                ))}
                                

                            </Bar>
                    </BarChart>

                </ResponsiveContainer>

            </div>










        </motion.div>

    )
}














