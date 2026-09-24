export default function Stats({ filtered }) {
  const largestCountry = filtered.reduce(
    (max, c) => (c.area > (max?.area || 0) ? c : max),
    null
  )

  const smallestCountry = filtered.reduce(
    (min, c) => (c.area < (min?.area ?? Infinity) ? c : min),
    null
  )

  const totalArea = filtered.reduce((sum, c) => sum + (c.area || 0), 0)

  const stats = [
    {
      icon: "🌍",
      label: "Total Countries",
      value: filtered.length,
      sub: null,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📐",
      label: "Total Area",
      value: totalArea.toLocaleString("en-US"),
      sub: "km²",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "🏔",
      label: "Largest Country",
      value: largestCountry?.name?.common || "—",
      sub: largestCountry?.area
        ? `${largestCountry.area.toLocaleString("en-US")} km²`
        : null,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: "🐜",
      label: "Smallest Country",
      value: smallestCountry?.name?.common || "—",
      sub: smallestCountry?.area
        ? `${smallestCountry.area.toLocaleString("en-US")} km²`
        : null,
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
      {stats.map((s, i) => (
        <div
          key={i}
          className="group relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.color}`}
          />

          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-base shadow group-hover:scale-110 transition-transform duration-300`}
            >
              {s.icon}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-slate-400 font-medium truncate">
                {s.label}
              </p>
              <p className="text-sm font-bold text-slate-900 truncate">
                {s.value}
              </p>
              {s.sub && (
                <p className="text-[10px] text-slate-400 truncate">{s.sub}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}