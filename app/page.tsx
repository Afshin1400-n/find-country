"use client"

import { useState, useEffect } from "react"
import { useCountryStore } from "./store/FetchCountry"

export default function Home() {
  const { countries, searchTerm, setSearchTerm } = useCountryStore()
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const value = searchTerm.toLowerCase().trim()
    if (!value) {
      setResults([])
      return
    }

    if (!Array.isArray(countries)) {
      console.log("countries آرایه نیست:", countries)
      return
    }

    const found = countries.filter((c) =>
      c.name.common.toLowerCase().includes(value)
    )

    setResults(found)
    setSearchTerm("")
  }

  useEffect(() => {
    console.log("results:", results)
  }, [results])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">

        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            🌍 اطلاعات کشورها
          </h1>
          <p className="text-slate-500 text-sm">
            یه لیست از کشورهای دنیا با اطلاعات مفید
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex gap-3 mb-7 bg-white p-4 rounded-2xl shadow-sm"
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="جستجوی کشور..."
            className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition"
          >
            جستجو
          </button>
        </form>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">

          {results.length > 0 &&
            results.map((country) => (
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

          {results.length === 0 && searchTerm && (
            <p className="text-center text-slate-500 col-span-full">
              کشوری با نام «{searchTerm}» پیدا نشد
            </p>
          )}

          {results.length === 0 && !searchTerm && (
            <p className="text-center text-slate-400 col-span-full">
              اسم یه کشور رو تایپ کن
            </p>
          )}

        </div>
      </div>
    </div>
  )
}