"use client"

export default function Cart({ filtered }) {
  if (filtered.length === 0) {
    return (
      <div className="text-center py-16 col-span-full">
        <p className="text-5xl mb-4">🔍</p>
        <p className="text-slate-500 text-lg">هیچ کشوری پیدا نشد</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
      {filtered.map((country) => (
        <div
          key={country.cca2}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          {/* پرچم */}
          <div className="relative h-32 bg-slate-100 overflow-hidden">
            <img
              src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
              alt="پرچم"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* محتوا */}
          <div className="p-5 flex flex-col flex-1">
            <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">
              {country.name.common}
            </h2>

            <ul className="w-full text-sm text-slate-600 space-y-1 mt-auto">
              <li className="flex justify-between items-center gap-2 py-2 border-b border-dashed border-slate-200">
                <span className="text-slate-500">🏛 پایتخت</span>
                <span className="font-semibold text-slate-900">
                  {country.capital?.[0] || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-2 py-2 border-b border-dashed border-slate-200">
                <span className="text-slate-500">🌐 قاره</span>
                <span className="font-semibold text-slate-900">
                  {country.region || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-2 py-2 border-b border-dashed border-slate-200">
                <span className="text-slate-500">📐 مساحت</span>
                <span className="font-semibold text-slate-900">
                  {country.area?.toLocaleString("fa-IR") || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-2 py-2 border-b border-dashed border-slate-200">
                <span className="text-slate-500">🗣 زبان</span>
                <span className="font-semibold text-slate-900 truncate max-w-[120px]">
                  {Object.values(country.languages || {}).join("، ") || "—"}
                </span>
              </li>
              <li className="flex justify-between items-center gap-2 py-2">
                <span className="text-slate-500">💰 واحد پول</span>
                <span className="font-semibold text-slate-900 truncate max-w-[120px]">
                  {Object.values(country.currencies || {})
                    .map((c) => c.name)
                    .join("، ") || "—"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}