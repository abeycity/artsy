import { ReactNode, useState, } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Accordion = ({children,title,className}:{className:string,children:ReactNode,title:string}) => {
    const [open,SetOpen]=useState(false) 
    return (
        <div>
            <div onClick={()=>SetOpen((prev)=>!prev)} className='flex items-center justify-between'>
               <div className='flex '>
                <p className={`${className} font-satoshi`}>{title}</p>
               </div>
              <div  className={`${open ? "rotate-180":""} rotate-0`}>
               <FaAngleDown/> 
              </div>
            </div>
         
            <div  className={`${open ? 'max-h-fit' :""}  duration-300  transition-transform origin-top  ease-out max-h-0 overflow-hidden transform `}>
                {children}
            </div>
        
        </div>
  )
}

export default Accordion