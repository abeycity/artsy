const Checkbox = ({ label, selected, styleClass, onChange }: { label: string, selected: boolean, styleClass: string, onChange: (checked: boolean) => void }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      onChange(checked);
  }

  return (
      <div className={styleClass}>
          <label>
              <input
                  type="checkbox"
                  checked={selected}
                  onChange={handleChange} />
              {label}
          </label>
      </div>
  );
}


export default Checkbox