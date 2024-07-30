import { box1, box2, drop1, drop2, drop3, drop4, fpd1, fpd2, fpd3, product1, product2, product3, product4, product5, product6, product7, product8, product9 } from "../assets";
import { bidProps, DropProps, hproProps, ProductProps } from './types';


export const 
  hpro:{[key:string]:hproProps}={
     hproduct1:{
        img:fpd1,
        title:"The Boolean Egyptian",
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
        text:"64 major creators",
        id:'1'
     },
     hproduct2:{
        img:fpd2,
       title:"Are we there yet?",
       discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
       text:"64 major creators",
       id:'2'
     },
      hproduct3:{
        img:fpd3,
       title:"olobiri 1997",
       discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
       text:"64 major creators",
       id:'3'
      },

  },
   product:{[key:string]:ProductProps}={
      product1:{
      img:product1,
      name:"Philomena'22",
      price:390,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Ali Dawa",
      country:"Italy",
      views:1.7,
      id:1
      },
     product2:{
      img:product2,
      name:"boolean egyptian",
      price:400,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Dan Murray",
      country:"Canada",
      views:1.7,
      id:2
     },
     product3:{
      img:product3,
      name:"blanc",
      price:390,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Ali Dawa",
      country:"Italy",
      views:2.1,
      id:3
     },
     product4:{
      img:product4,
      name:"elllipsa",
      price:320,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Jacob Banks",
      country:"United States",
      views:2.7,
      id:4
     },
     product5:{
      img:product5,
      name:"the lawmakers",
      price:365,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Alima Maturu",
      country:"Nigeria",
      views:5.7,
      id:5
      },
     product6:{
      img:product6,
      name:"veil",
      price:550,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Dola Tubosun",
      country:"Nigeria",
      views:6.6,
      id:6
     },
     product7:{
      img:product7,
      name:"alternating",
      price:290,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Jacob Banks",
      country:"United States",
      views:2.7,
      id:7
     },
     project8:{
      img:product8,
      name:"rosemary'22",
      price:490,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Alima Maturu",
      country:"Nigeria",
      views:5.7,
      id:8  
     },
     product9:{
      img:product9,
      name:"beverly",
      price:350,
      discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creator:"Dola Tubosun",
      country:"Nigeria",
      views:6.6,
      id:9
     },

   },
   bid:{[key:string]:bidProps}={
      bid1:{
         img:box1,
         creator:"Dan Murray",
         date:"12/08/22",
         highestbid:0.57,
         currentbid:0.987,
         name:"Out of the box"
      },
      bid2:{
         img:box2,
         creator:"Jacob Banks",
         date:"12/08/22",
         highestbid:0.34,
         currentbid:0.99,
         name:"Falling apart"
      },
      
   },
   drop:{[key:string]:DropProps}={
     drp1:{
         img:drop1,
         event:"upcoming",
         name:"Eyo:Eko For Show",
         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
         creator:"Aliya Minat",
         notify:"Get notified"
     },
     drp2:{
         img:drop2,
         event:"live now",
         name:"Ginger Surburbs",
         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
         creator:"Tina benson",
         notify:"join now"
     },
     drp3:{
         img:drop3,
         event:"ended",
         name:"Sink",
         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
         creator:"Tina benson",
         notify:"view"
     },
     drp4:{
         img:drop4,
         event:"ended",
         name:"Warped'99",
         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
         creator:"Aliya Minat",
         notify:"view"
     },
     
   },
homepro=Object.keys(hpro).map((keys)=>hpro[keys]),
drops=Object.keys(drop).map((keys)=>drop[keys]),
bids=Object.keys(bid).map((keys)=>bid[keys]),
products=Object.keys(product).map((keys)=>product[keys])