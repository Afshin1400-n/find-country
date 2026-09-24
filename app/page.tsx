"use client"

import { useEffect, useState } from "react"
import { useCountryStore } from "./store/FetchCountry"
import Cart from "./component/Cart"
import RegionFilter from "./component/Region"
import Stats from "./component/Stats"

export default function Home() {
  const { countries, searchTerm, setSearchTerm } = useCountryStore()
  const [region, setRegion] = useState("")

  
  const filtered = countries.filter((c) => {

    const value = searchTerm.toLowerCase().trim()

        const matchName = value? c.name.common.toLowerCase().includes(value): true

        const matchRegion = region ? c.region === region : true

        return matchName && matchRegion
      })
    

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

        <div className="flex gap-3 mb-7 bg-white p-4 rounded-2xl shadow-sm">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="جستجوی کشور..."
            className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition"
          />
          <RegionFilter region={region} setRegion={setRegion} />
        </div>
   <Stats filtered={filtered}/>

        <Cart filtered={filtered} />
      </div>
    </div>
  )
}