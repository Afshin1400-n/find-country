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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">

      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <p className="text-2xl mb-1">🌍</p>
        <p className="text-xs text-slate-500 mb-1">تعداد کشورها</p>
        <p className="text-xl font-bold text-slate-900">{filtered.length}</p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <p className="text-2xl mb-1">📐</p>
        <p className="text-xs text-slate-500 mb-1">مساحت کل</p>
        <p className="text-xl font-bold text-slate-900">
          {totalArea.toLocaleString("fa-IR")} km²
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <p className="text-2xl mb-1">🏔</p>
        <p className="text-xs text-slate-500 mb-1">پهناورترین کشور</p>
        <p className="text-xl font-bold text-slate-900">
          {largestCountry?.name?.common || "—"}
        </p>
        <p className="text-xs text-slate-400">
          {largestCountry?.area?.toLocaleString("fa-IR") || ""} km²
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <p className="text-2xl mb-1">🏔</p>
        <p className="text-xs text-slate-500 mb-1">کوچک ترین کشور</p>
        <p className="text-xl font-bold text-slate-900">
          {smallestCountry?.name?.common || "—"}
        </p>
        <p className="text-xs text-slate-400">
          {smallestCountry?.area?.toLocaleString("fa-IR") || ""} km²
        </p>
      </div>

    </div>
  )
}