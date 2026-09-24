"use client"

export default function Cart({ filtered }) {
  if (filtered.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-5xl mb-4">🔍</p>
        <p className="text-slate-500 text-lg">No countries found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {filtered.map((country) => (
        <div
          key={country.cca2}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
        >
          {/* Flag */}
          <div className="relative h-16 bg-slate-100 overflow-hidden">
            <img
              src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
              alt="flag"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-2.5 flex flex-col flex-1">
            <h2 className="text-xs font-bold text-slate-900 mb-2 text-center truncate">
              {country.name.common}
            </h2>

            <ul className="w-full text-[10px] text-slate-600 space-y-0.5 mt-auto">
              <li className="flex justify-between items-center gap-1 py-1 border-b border-dashed border-slate-200">
                <span className="text-slate-400">Capital</span>
                <span className="font-semibold text-slate-900 truncate max-w-[70px]">
                  {country.capital?.[0] || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-1 py-1 border-b border-dashed border-slate-200">
                <span className="text-slate-400">Region</span>
                <span className="font-semibold text-slate-900 truncate max-w-[70px]">
                  {country.region || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-1 py-1 border-b border-dashed border-slate-200">
                <span className="text-slate-400">Area</span>
                <span className="font-semibold text-slate-900 truncate max-w-[70px]">
                  {country.area?.toLocaleString("en-US") || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-1 py-1">
                <span className="text-slate-400">Currency</span>
                <span className="font-semibold text-slate-900 truncate max-w-[70px]">
                  {Object.values(country.currencies || {})[0]?.name || "—"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}