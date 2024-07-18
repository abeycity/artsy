"use client"
import { useState } from "react";
import { selectDropMenuProps } from "../utlis/types"
import { FaAngleDown } from "react-icons/fa";

const Selectdropmenu:React.FC<selectDropMenuProps>=({classname,value,placeholder,options, children,grid,onChange}) => {
   
    const [open,setOpen]=useState(false);
  return (
    <div className={`${classname}`}>
        <div className='w-full px-4 py-2 border border-dark'>
           <div className='justify-between flex items center'
                 onClick={ ()=> setOpen((prev)=>!prev)}
                 tabIndex={0}
                 >
                <p>{ value ? value : placeholder}</p>
                <div className={`${open ? 'rotate-180 ' : 'rotate-0'} transition-all '`}>
                  <FaAngleDown/>
                </div>
           </div>
             { open && <div className='transition-all transforn delay-300'>
                { options.map((option)=>
                        <div  key={option}
                        onClick={()=>{
                          onChange(option)
                          setOpen(false)
                        }}
                        >
                            <div className="flex flex-row-reverse gap-4">
                                { grid ? <div>{children}</div> : null } 
                                <p>{option}</p> 

                            </div>
                        </div>
                    )
                }
                </div>
             }
        </div>
    </div>    
  )
}

export default Selectdropmenu