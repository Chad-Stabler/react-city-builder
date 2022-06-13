export default function Dropdown({ options, handleChange, theme }) {
  return (<div>
    Select a {theme}
    <select onChange={handleChange}>
      {
        options.map((option, i)=> <option value={option.value} key={option.value + i} >{option.display}</option>)
      }
    </select>
  </div>);
}