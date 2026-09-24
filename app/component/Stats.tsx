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
      label: "تعداد کشورها",
      value: filtered.length,
      sub: null,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📐",
      label: "مساحت کل",
      value: totalArea.toLocaleString("fa-IR"),
      sub: "km²",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "🏔",
      label: "پهناورترین کشور",
      value: largestCountry?.name?.common || "—",
      sub: largestCountry?.area
        ? `${largestCountry.area.toLocaleString("fa-IR")} km²`
        : null,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: "🐜",
      label: "کوچک‌ترین کشور",
      value: smallestCountry?.name?.common || "—",
      sub: smallestCountry?.area
        ? `${smallestCountry.area.toLocaleString("fa-IR")} km²`
        : null,
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
      {stats.map((s, i) => (
        <div
          key={i}
          className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl
           hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* نوار رنگی بالا */}
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`}
          />

          <div className="flex flex-col items-center text-center">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {s.icon}
            </div>

            <p className="text-xs text-slate-500 mb-2 font-medium">
              {s.label}
            </p>

            <p className="text-lg font-bold text-slate-900 leading-tight">
              {s.value}
            </p>

            {s.sub && (
              <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}