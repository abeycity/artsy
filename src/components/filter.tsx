import { RiEqualizerLine } from "react-icons/ri";
import Accordion from "./Accordion/Accordion";
const Filter = () => {
  return (
    <div>
        <div>
         <RiEqualizerLine />
         <h6>Filter</h6>
        </div>
        <Accordion title="By Category">
          <div>
            
          </div>
        </Accordion>
    </div>
  )
}

export default Filter