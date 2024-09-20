import { BiEdit, BiSearch, BiTrash } from "react-icons/bi"
import { PRODUCTS_DATA, USERS_DATA } from "../../Constants"

import { motion } from "framer-motion"
import { useState } from "react"

export const UsersTable = () => {

    const [search,setSearch]=useState('')
    

    const result=USERS_DATA.filter((item) =>
    
       item.name.toLowerCase().includes(search.toLowerCase())
    
      
    )
    

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>


            <div className="flex justify-between items-center mb-8">

                <h2 className="text-xl font-semibold text-gray-100">Users List</h2>
                <div className="relative ">
                    <input value={search} onChange={(e)=>{
                        setSearch(e.target.value)
                    }} type="text" placeholder="Search Products..." className="bg-gray-700 text-white
                    placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto"

                    />
                    <BiSearch className="absolute left-3 top-3 text-gray-400" size={18} />

                </div>

            </div>


            

                <div className="grid grid-rows-6  -blue-500 gap-2  text-left text-xs font-medium text-gray-400  tracking-wider uppercase">
                
                    <div className="border-b flex justify-evenly md:justify-center py-3 sm:gap-6 md:gap-[5rem] text-left border-gray-400 ">
                    
                    <div className=" w-[3rem] md:w-[8rem]">name</div>
                    <div className="w-[4rem] md:w-[8rem]">email</div>
                    
                    <div className=" w-[4rem] md:w-[8rem]">role</div>

                    <div className=" w-[4rem] md:w-[8rem]">status</div>
                    
                    
                    <div className=" w-[2rem] md:w-[8rem]">Actions</div>
                    </div>


                    {/* <div className=" bg-gray-400 w-full "></div> */}

                    {(search? result:USERS_DATA ).map((item,index)=>(
                                            
                     <div className="border-b flex justify-evenly md:justify-center items-center py-3 gap-6 md:gap-[5rem]  border-gray-400 text-center md:text-left ">
                            
                     <div className=" w-[2rem] md:w-[8rem]  flex gap-2">
                   
                        <img src="https://bit.ly/dan-abramov" className="max-md:hidden border w-[2rem] rounded-full " alt="" />{item.name}</div>
                   
                    <div className="normal-case md:w-[8rem] w-[4.5rem] break-words">{item.email}</div>
                    
                    <div className={`md:w-[8rem] w-[2rem] ${item.role== 'admin'? `text-blue-400`:``}`}>{item.role}</div>
                    <div className={`md:w-[8rem] w-[2rem] ${item.status == `active`? `text-green-400`: `text-red-500`} `}>{item.status}</div>
                    
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














// // 
// <div className="flex flex-col  -green-500 w-full">
                    

// {PRODUCTS_DATA.map((item)=>(
//     <ol className="flex items-center justify-between  -red-500 px-0 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 <li className="">{item.name}</li>
//                 <li className="">{item.category}</li>
//                 <li>{item.price}</li>
//                 <li>{item.stock}</li>
//                 <li>{item.sales}</li>
//                 <li></li>
//     </ol>
// ))}
// </div>











// <div className="grid grid-cols-6 gap-4  px-0 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> 

// {/* name */}
// <ol className="flex flex-col  lg:min-w-40 items-start gap-3 list-decimal">
// {PRODUCTS_DATA.map((item,index)=>(
//         <li key={index} className="">{item.name}</li>
    
// ))}

// </ol>
//         {/* category */}
// <ol className="flex flex-col items-start gap-3 min-w-40  ">
// {PRODUCTS_DATA.map((item,index)=>(
  
//         <li className="" key={index}>{item.category}</li>
  
    
// ))}

// </ol>

//         {/* price */}
// <ol className=" flex flex-col items-start gap-3 min-w-40 ">
// {PRODUCTS_DATA.map((item,index)=>(
  
//         <li key={index}>{item.price}</li>
  
    
// ))}

// </ol>

//         {/* stock */}
// <ol className=" flex flex-col items-start gap-3 ">
// {PRODUCTS_DATA.map((item,index)=>(
  
//         <li key={index}>{item.stock}</li>
  
    
// ))}

// </ol>


//     {/* sales */}
// <ol className=" flex flex-col items-start gap-3 ">
// {PRODUCTS_DATA.map((item,index)=>(
  
//         <li key={index}>{item.sales}</li>
  
    
// ))}

// </ol>

// </div> 