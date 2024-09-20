import { useState } from "react"
import { ORDERS_DATA } from "../../Constants"
import {motion} from 'framer-motion'
import { BiEdit, BiSearch, BiTrash } from "react-icons/bi"
export const OrdersListTable = () => {

    const COLORS=[
        "#8884d8",
        "#82ca9d",
        "#ec4899",
        "#0088fe",
    ]
    const [search,setSearch]=useState('')
    

    const result=ORDERS_DATA.filter((item) =>
    
       item.name.toLowerCase().includes(search.toLowerCase())
    
      
    )
    

    return (
        <motion.div className='col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>


            <div className="flex justify-between items-center mb-8">

                <h2 className="text-xl font-semibold text-gray-100">Orders List</h2>

                <div className="relative ">
                    <input value={search} onChange={(e)=>{
                        setSearch(e.target.value)
                    }} type="text" placeholder="Search Orders..." className="bg-gray-700 text-white
                    placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto"

                    />
                    <BiSearch className="absolute left-3 top-3 text-gray-400" size={18} />

                </div>

            </div>


            

                <div className="grid grid-rows-6  -blue-500 gap-2  text-left text-xs font-medium text-gray-400  tracking-wider uppercase">
                
                    <div className="border-b flex justify-evenly md:justify-center py-3 sm:gap-6 md:gap-[5rem] text-left border-gray-400 ">
                    
                    <div className=" w-[3rem] md:w-[8rem]">id</div>
                    <div className="w-[4rem] md:w-[8rem]">name</div>
                    
                    <div className=" w-[4rem] md:w-[8rem]">total</div>

                    <div className=" w-[4rem] md:w-[8rem] ">date</div>
                    <div className=" w-[4rem] md:w-[8rem]">status</div>
                    
                    <div className=" w-[2rem] md:w-[8rem]">Actions</div>
                    </div>


                    {/* <div className=" bg-gray-400 w-full "></div> */}

                    {(search? result:ORDERS_DATA ).map((item,index)=>(
                                            
                     <div className="border-b flex justify-evenly md:justify-center items-center py-3 gap-6 md:gap-[5rem]  border-gray-400 text-center md:text-left ">
                        
                        <div className="normal-case md:w-[8rem] w-[4.5rem] break-words">{item.id}</div>

                     <div className=" w-[2rem] md:w-[8rem]  flex gap-2">

                        {item.name}</div>
                   
                    <div className="normal-case md:w-[8rem] w-[4.5rem] break-words">{item.total}</div>
                    
                    <div className="md:w-[8rem] w-[2rem] ">{item.data}</div>
                    <div className={`md:w-[8rem] w-[2rem] ${item.status == `Delievered`? `text-[#0088fe]`: `${item.status == `Shipped`? `text-[#8884d8]`: `${item.status == `Pending`? `text-[#ec4899]`: `text-red-500`}`}`} `}>{item.status}</div>
                    
                    <div className="md:w-[8rem] w-[2rem]  flex flex-col md:flex-row  items-center justify-start gap-2 md:gap-4 ">
                        
                            <BiEdit size={18} className="cursor-pointer hover:fill-blue-500"/>
                            
                        
                        <BiTrash size={18} className="cursor-pointer hover:fill-red-500"/>
                    </div>


                    </div>
                            


                    ))}



                


  


            

                  

            </div>

        </motion.div>
    )
}