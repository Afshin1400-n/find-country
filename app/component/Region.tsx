"use client"

export default function RegionFilter({ region, setRegion }) {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="px-5 py-3 border-2 border-slate-200 rounded-xl text-sm bg-white cursor-pointer outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition font-medium text-slate-700 hover:border-slate-300"
    >
      <option value="">🌐 همه قارهها</option>
      <option value="Africa">🌍 آفریقا</option>
      <option value="Americas">🌎 آمریکا</option>
      <option value="Asia">🌏 آسیا</option>
      <option value="Europe">🏰 اروپا</option>
      <option value="Oceania">🏝 اقیانوسیه</option>
      <option value="Antarctic">🧊 جنوبگان</option>
    </select>
  )
}