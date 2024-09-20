import { BarChart, CartesianGrid, Legend, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { SALES_CHANNEL_DATA } from "../../Constants"
import { motion } from 'framer-motion'
const COLORS = ["#6366f1", "#885cf6", "#ec4899", "#10b981", "#f59e08"]
export const SalesChannelChart = () => {


    return (
        <motion.div className="w-full bg-gray-80 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}>

            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales By Channel</h2>


            <div className="h-80 ">

                <ResponsiveContainer>
                    <BarChart data={SALES_CHANNEL_DATA} >
                        <CartesianGrid strokeDasharray='3 3' stroke="#4b5563" />
                        <XAxis dataKey='name' stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31,41,55,0.8)",
                            borderColor: '#4b5563'
                        }} itemStyle={{ color: "#e5e7eb" }} />
                        <Legend />
                        <Bar dataKey={"value"} fill='#8884d8'>
                            {SALES_CHANNEL_DATA.map((item, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>

                </ResponsiveContainer>


            </div>
        </motion.div>
    )
}