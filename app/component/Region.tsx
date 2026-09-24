"use client"

export default function RegionFilter({ region, setRegion }) {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="px-4 py-2.5 border-2 border-slate-200 rounded-xl text-sm bg-white cursor-pointer outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition font-medium text-slate-700 hover:border-slate-300"
    >
      <option value="">🌐 All Regions</option>
      <option value="Africa">🌍 Africa</option>
      <option value="Americas">🌎 Americas</option>
      <option value="Asia">🌏 Asia</option>
      <option value="Europe">🏰 Europe</option>
      <option value="Oceania">🏝 Oceania</option>
      <option value="Antarctic">🧊 Antarctic</option>
    </select>
  )
}