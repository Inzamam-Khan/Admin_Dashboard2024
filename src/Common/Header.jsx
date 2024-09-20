export const Header=({...props})=>{
    const {title}=props
    return(
        <div className="bg-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 ">
           
           <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ">
           <h1 className="text-2xl font-semibold text-gray-100 ">{title}</h1>
           </div>
            
        </div>
    )
}