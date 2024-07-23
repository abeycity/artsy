import React from 'react'
import { Buttonprop } from '../../utlis/types'

const Button:React.FC<Buttonprop> = ({children,outline,  onclick,classname}) => {
  return (
    <div className={`${classname} ${outline ? 'border-b outline-none bg-none' : '' } cursor-pointer`}
     onClick={onclick}>
        {children}
    </div>
  )
}

export default Button