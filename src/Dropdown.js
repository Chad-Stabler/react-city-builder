export default function Dropdown({ dropdowns, handleChange }) {
  return (<div>
    <div>
      {
        dropdowns.map((dropdown, i) => <div key={dropdown + i}>
          Select a {dropdown.name}:
          <select onChange={() => handleChange(dropdown.name)} >
            <option value={`${dropdown.name.toLowerCase()}-1`}>{dropdown.option1}</option>
            <option value={`${dropdown.name.toLowerCase()}-2`}>{dropdown.option2}</option>
            <option value={`${dropdown.name.toLowerCase()}-3`}>{dropdown.option3}</option>
          </select>
        </div>)
      }
    </div>
  </div>);
}