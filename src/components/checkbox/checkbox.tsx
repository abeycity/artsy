
const Checkbox = ({label,selected,styleClass,onChange}:{label:string,selected:boolean,styleClass:string,}) => {

    const handleChange=(e)=>{
        e.preventDefault()
        const {checked}=e.target;
        onChange(checked);
    }
  return (
<div className={`${styleClass}`}>
        <label>
        <input
          type="checkbox"
          value={selected}
          defaultChecked={selected}
          onChange={handleChange}/>
          {label}
        </label>
        
        
    </div>
  )
}

export default Checkbox