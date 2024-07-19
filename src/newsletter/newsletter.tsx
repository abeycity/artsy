import Button from "../components/button/button"

const Newsletter = () => {
  return (
    <div className=" md:border md:m-16 ">
      <div className="flex flex-col md:items-center p-4 md:p-10 gap-4">
          <h3 className="font-newsletter text-dark font-medium text-4xl ">newsletter</h3>
          <p className="font-satoshi font-normal text-lg md:text-xl">Subscribe to get daily updates on new drops & exciting deals </p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
            <div className="border border-dark  py-2 px-6">
             <input type="email" placeholder="enter your email" className="outline-none bg-none font-newsletter text-dark font-normal w-[200px]" />
            </div>
            <Button classname="font-newsletter font-normal border-dark border bg-global text-white py-2 px-6">subscribe</Button>
          </div>

      </div>
    </div>
  )
}

export default Newsletter