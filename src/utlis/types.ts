import { ReactNode,} from 'react';

export type hproProps={
    img:string,
    title:string,
    discription:string,
    text:string,
    id:string
}
export type Buttonprop={
    children:ReactNode,
    outline?:boolean,
    classname?:string,
    onclick?:()=>void
}
export type DropProps={
    img:string,
    event:string,
    name:string,
    desc:string,
    creator:string,
    notify:string
}
export type bidProps={
    img:string,
    creator:string,
    date:string,
    highestbid:number,
    currentbid:number,
    name:string
}
export type selectDropMenuProps={
    classname?:string,
    styleclass?:string
    placeholder:string,
    options:string[],
   value:string,
   onChange:(newValue:string)=>void,
   children?:ReactNode,
   grid?:boolean
}
export type ProductProps={
    img:string,
    name:string,
    price:number,
    discription:string,
    creator:string,
    country:string,
    views:number,
    id:number
}

