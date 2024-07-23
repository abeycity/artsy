import { ReactNode,} from 'react';

export type hproProps={
    img:StaticImport,
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
    img:StaticImport,
    event:string,
    name:string,
    desc:string,
    creator:string,
    notify:string
}
export type bidProps={
    img:StaticImport,
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
    img:StaticImport,
    name:string,
    price:number,
    discription:string,
    creator:string,
    country:string,
    views:number
}
