"use client"
import { useState } from "react";
import { selectDropMenuProps } from "../utlis/types"
import { FaAngleDown } from "react-icons/fa";

const Selectdropmenu:React.FC<selectDropMenuProps>=({classname,value,placeholder,options, children,grid,onChange}) => {
   
    const [open,setOpen]=useState(false);
  return (
    <div className={`${classname}`}>
        <div className='w-full border border-dark relative px-1'>
           <div className='justify-between flex items-center gap-2 px-2 '
                 onClick={ ()=> setOpen((prev)=>!prev)}
                 tabIndex={0}
                 >
                <p className="px-4 py-2">{ value ? value : placeholder}</p>
                <div className={`${open ? 'rotate-180 ' : 'rotate-0'} transition-all '`}>
                  <FaAngleDown/>
                </div>
           </div>
             { open && <div className='transition-all transforn delay-300  absolute w-full left-0'>
                { options.map((option)=>
                        <div  key={option}
                        onClick={()=>{
                          onChange(option)
                          setOpen(false)
                        }}
                        >
                            <div className={`${value === option ? "bg-dark" : "bg-gray"} w-full flex flex-row-revers gap-4 px-4 py-2`}>
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