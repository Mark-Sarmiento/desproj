import Admin from '@/pages/admin';
import classNames from 'classnames';
import { withProtected } from "../hook/route";
import React from 'react';

function Sidebar({}) {
    const  wrapperClasses = classNames(" h-screen  px-4 pt-8 pb-4 bg-white flex justify-between flex-col border  bg-red-400");
  return (<div className = {wrapperClasses }> Sidebar 
    <Admin/>
  </div>
  );
  
}

export default withProtected(Sidebar);
