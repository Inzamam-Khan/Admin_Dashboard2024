import { Route, Routes } from "react-router-dom"
import { OverviewPage } from "./Pages/OverviewPage"
import { Sidebar } from "./Common/Sidebar"
import { ProductsPage } from "./Pages/ProductsPage"
import { UsersPage } from "./Pages/UsersPage"
import { SalesPage } from "./Pages/SalesPage"
import { OrdersPage } from "./Pages/OrdersPage"
import { AnalyticsPage } from "./Pages/AnalyticsPage"

function App() {
  

  return (
   <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
    
    
    <div className="fixed inset-0 z-0 border">
      <div className="border border-red-500 absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  "></div>
      <div className="absolute border border-blue-500 inset-0 backdrop-blur-sm"></div>
    </div>

    <Sidebar/>

    <Routes>
      <Route path="/" element={<OverviewPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/sales" element={<SalesPage/>}/>
      <Route path="/orders" element={<OrdersPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>}/>
    </Routes>

   </div>
  )
}

export default App