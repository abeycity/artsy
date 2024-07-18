import React from 'react'
import { Buttonprop } from '../../utlis/types'

const Button:React.FC<Buttonprop> = ({children,outline, classname}) => {
  return (
    <div className={`${classname} ${outline ? 'border-b border-b-white outline-none bg-none' : '' } `}>
        {children}
    </div>
  )
}

export default Button