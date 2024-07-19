
import { Link, useLocation } from 'react-router-dom'


const Breadcrumb = () => {
     const location =useLocation()
      let crumblink=''
      const crumbPath = location.pathname.split('/').
                        filter((path)=>path !=='').
                        map((crumb)=>{crumblink += `/${crumb}`
                            return <Link to={crumblink} key={crumb}>{crumb}/</Link>
                        })
                        console.log(crumbPath)
  return (
    
    <div><p>{crumbPath}</p></div> 
  )
}

export default Breadcrumb