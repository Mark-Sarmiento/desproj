import React from 'react';
import Sidebar from './Sidebar';
import { withProtected } from "../hook/route";

const Layout = ({children}) => {
  return (
    
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        
        <div className = ' bg-primary flex-1 p-4 text-white'>
            {children}
        </div>  
        
    </div>
  )
}

export default withProtected(Layout);