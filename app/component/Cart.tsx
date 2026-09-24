"use client"

export default function Cart({ filtered }) {
  if (filtered.length === 0) {
    return (
      <p className="text-center text-slate-400 col-span-full">
        هیچ کشوری پیدا نشد
      </p>
    )
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
      {filtered.map((country) => (
        <div
          key={country.cca2}
          className="bg-white rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition flex flex-col items-center"
        >
          <img
            src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
            alt="پرچم"
            className="w-24 h-16 object-cover rounded-lg bg-slate-200 border border-slate-200 mb-4"
          />
          <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">
            {country.name.common}
          </h2>
          <ul className="w-full text-sm text-slate-600">
            <li className="flex justify-between gap-2 py-2 border-b border-dashed border-slate-200">
              🏛 پایتخت{" "}
              <span className="font-semibold text-slate-900">
                {country.capital?.[0] || "—"}
              </span>
            </li>
            <li className="flex justify-between gap-2 py-2 border-b border-dashed border-slate-200">
              قاره{" "}
              <span className="font-semibold text-slate-900">
                {country.region || "—"}
              </span>
            </li>
            <li className="flex justify-between gap-2 py-2 border-b border-dashed border-slate-200">
              📐 مساحت{" "}
              <span className="font-semibold text-slate-900">
                {country.area?.toLocaleString("fa-IR") || "—"}
              </span>
            </li>
            <li className="flex justify-between gap-2 py-2 border-b border-dashed border-slate-200">
              🗣 زبان{" "}
              <span className="font-semibold text-slate-900">
                {Object.values(country.languages || {}).join("، ") || "—"}
              </span>
            </li>
            <li className="flex justify-between gap-2 py-2">
              💰 واحد پول{" "}
              <span className="font-semibold text-slate-900">
                {Object.values(country.currencies || {})
                  .map((c) => c.name)
                  .join("، ") || "—"}
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}