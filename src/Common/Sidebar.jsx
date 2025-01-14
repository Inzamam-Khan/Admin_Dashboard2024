import { useState } from "react"
import { SIDEBAR_ITEMS } from "../Constants"
import { AnimatePresence, motion } from "framer-motion"
import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"



export const Sidebar=()=>{

    const [sidebarOpen,setSidebarOpen]=useState(false)
    return(
        <motion.div className={` relative z-10 transition-all 
        duration-300 ease-in-out flex-shrink-0 ${sidebarOpen ? `w-54`:`w-20`}`} 
        animate={{width:sidebarOpen ? 256 :80}}>

            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col  border-red-700">
               
               {/* menu button */}
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>{setSidebarOpen(!sidebarOpen)}}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit "
                >
                    <BiMenu/>

                </motion.button>


                <nav className="mt-8  flex-grow">
                    {SIDEBAR_ITEMS.map((item,index)=>(
                        
                        <Link to={item.link} key={index}>
                        
                        <motion.div className="flex items-center p-2  border-red-500 text-sm font-medium 
                        rounded-lg hover:bg-gray-700 transition-colors mb-2" >

                                <span style={{color:item.color,minWidth:'20px',fontSize:"22px",}}>{item.icon}  </span>

                                <AnimatePresence>
                                   
                                   {sidebarOpen && <motion.span className="ml-4  whitespace-nowrap"
                                    initial={{opacity:0,width:0}}
                                    animate={{opacity:1,width:1}}
                                    exit={{opacity:0,width:0}}
                                    transition={{duration:0.2,delay:0.3}}>
                                        {item.name}
                                    </motion.span> }
                                    
                                </AnimatePresence>
                        </motion.div>
                        </Link>
                    ))}
                </nav>
               
            </div>

        </motion.div>

    )
}