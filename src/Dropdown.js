export default function Dropdown({ waterfront, skyline, castle, setSkylineID, setWaterfrontID, setCastleID }) {
  return (<div>
    <div>
    Select a waterfront
      <select onChange={e => setWaterfrontID(e.target.value)}>
        <option value={`${waterfront}-1`}>Serious</option>
        <option value={`${waterfront}-1`}>Mysterious</option>
        <option value={`${waterfront}-1`}>Regal</option>
      </select>
    </div>
    <div>
    Select a skyline
      <select onChange={e => setSkylineID(e.target.value)}>
        <option value={`${skyline}-1`}>Pink</option>
        <option value={`${skyline}-1`}>Busy</option>
        <option value={`${skyline}-1`}>Foggy</option>
      </select>
    </div>
    <div>
    Select a waterfront
      <select onChange={e => setCastleID(e.target.value)}>
        <option value={`${castle}-1`}>Dock</option>
        <option value={`${castle}-1`}>Sunset</option>
        <option value={`${castle}-1`}>Boats</option>
      </select>
    </div>
  </div>);
}