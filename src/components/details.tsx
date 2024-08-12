
import { useState } from 'react'
import Selectdropmenu from '../selectdropmenu/selectdropmenu'
import Button from './button/button'

const Details = ({handleclick}:{handleclick:()=>void}) => {
    const [sort,setsort]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const walletoptions=["trustwallet","metamask","phantom wallet"]
    const countryoptions=["nigeria", "ghana","naija"]
    const  cityoptions=["lagos","abuja","accra","benin city"]
  return (
      <form action="" className='flex flex-col gap-6 items-start w-full'>
            <div className='flex flex-col gap-2 w-full '>
                <label htmlFor="mail" className='text-[#888888]  text-xl'>Your email</label>
                <input type="email" name="mail" placeholder='willymonka@gmail.com' className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray w-full'/>
            </div>
            <div className='flex gap-4 items-center w-full'>
                <input type="checkbox" name="box" id="" />
                <label htmlFor="box" className='text-[#888888]  text-sm'>Get updates about new drops & exclusive offers</label>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='text-[#888888]  text-xl' htmlFor="yourmail">Your email</label>
                <input type="email" name="yourmail" placeholder='willymonka@gmail.com' className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray w-full'/>
            </div>
            <div className='flex flex-col gap-2  w-full'>
             <label className='text-[#888888]  text-xl'>Choose a wallet</label>
               <Selectdropmenu classname='bg-[#F2F2F2] h-full' styleclass='p-4 rounded-lg ' placeholder=''  options={walletoptions} onChange={(newvalue)=>setsort(newvalue)} value={sort}/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
             <label className='text-[#888888]  text-xl'>City</label>
              <Selectdropmenu  classname="bg-[#F2F2F2] h-full"   styleclass='p-4 rounded-lg ' placeholder='' options={cityoptions} onChange={(newvalue)=>setCity(newvalue)} value={city}/>
            </div>
            <div className='flex justify-between items-center gap-6 w-full'>
                <div className='flex flex-col gap-2 w-full '>
                <label className='text-[#888888]  text-xl'>Country</label>
                <Selectdropmenu  classname="bg-[#F2F2F2] min-h-full"   styleclass='p-4 rounded-lg ' placeholder='' options={countryoptions} onChange={(newvalue)=>setCountry(newvalue)}  value={country}/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor="postalcode" className='text-[#888888]  text-xl'>Postal code</label>
                  <input type='number' placeholder='00100' name='postalcode' className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray'/>                    
                </div>

            </div>
            <div className='flex flex-col gap-2 w-full '>
                  <label htmlFor="phonenumer" className='text-[#888888]  text-xl'>Phone number</label>
                  <input type='number' placeholder='123111111111' name='phonenumber' className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray w-full'/>                    
            </div>
           <div className='w-full'>
             <Button classname="bg-[#000] text-[#f2f2f2] text-center text-2xl py-6 rounded-md hover:bg-[#006CA2] hover:ease-in duration-200" onclick={handleclick} >Proceed to payment</Button>
           </div>
      </form>
  )
}

export default Details