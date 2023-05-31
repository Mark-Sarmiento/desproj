import React from 'react';
import Sidebar from './Sidebar';
import { withProtected } from "../hook/route";

function Layout({}) {
  return (
    
    <div className="h-screen  flex flex-row justify-start">
        <Sidebar />
        
        <div className = "bg-black flex-1 p-4 text-white" >
            asdasdasd
        </div>  
    </div>
  )
}

export default withProtected(Layout);