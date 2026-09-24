"use client"

import { useState , useRef, useEffect} from "react"
import { useCountryStore } from "./store/FetchCountry"
import Cart from "./component/Cart"
import RegionFilter from "./component/Region"
import Stats from "./component/Stats"

export default function Home() {
  const { countries, searchTerm, setSearchTerm } = useCountryStore()
  const [region, setRegion] = useState("")
  const focusRef = useRef(null)

useEffect(() => {
  focusRef.current?.focus()
}, [])

  const filtered = countries.filter((c) => {
    const value = searchTerm.toLowerCase().trim()
    const matchName = value ? c.name.common.toLowerCase().includes(value) : true
    const matchRegion = region ? c.region === region : true
    return matchName && matchRegion
  })



  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 text-slate-800 p-6 md:p-10"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="text-center mb-1">
          <div className="inline-block mb-1">
            <span className="text-6xl">🌍</span>
          </div>
          <h1 className="text-2xl md:text-1xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            اطلاعات کشورها
          </h1>
          <p className="text-slate-500 text-base md:text-lg">
            کاوش در دنیا، با یک جستجو
          </p>
        </header>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg shadow-slate-200/50 border border-white">
          <input
           ref={focusRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="🔍 جستجوی کشور..."
            className="flex-1 px-5 py-3 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition bg-white"
          />
          <RegionFilter region={region} setRegion={setRegion} />
        </div>

        <Stats filtered={filtered} />

        <Cart filtered={filtered} />

      </div>
    </div>
  )
}