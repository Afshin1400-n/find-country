"use client"

import { useState, useRef, useEffect,useMemo } from "react"
import { useCountryStore } from "./store/FetchCountry"
import { useThemeStore } from "./store/Theme"
import Cart from "./component/Cart"
import RegionFilter from "./component/Region"
import Stats from "./component/Stats"
import ThemeToggle from "./component/ThemeToggle"

export default function Home() {
  const { countries, searchTerm, setSearchTerm, loading, fetchCountries } = useCountryStore()
  const [region, setRegion] = useState("")
  const focusRef = useRef(null)
  const theme = useThemeStore((s) => s.theme)

useEffect(() => {
  focusRef.current?.focus()
  if (countries.length === 0) {
    fetchCountries()
  }
}, [])

  const filtered = useMemo(() => {
  const value = searchTerm.toLowerCase().trim()
  return countries.filter((c) => {
    const matchName = value ? c.name.common.toLowerCase().includes(value) : true
    const matchRegion = region ? c.region === region : true
    return matchName && matchRegion
  })
}, [countries, searchTerm, region])

  return (
    <div
      className={`min-h-screen p-4 md:p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 text-slate-800"
      }`}
      dir="ltr"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Countries Info</h1>
              <p className="text-slate-500 text-xs">
                Explore the world, one search away
              </p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        {/* Search Bar */}
        <div className={`flex flex-col sm:flex-row gap-2 mb-5 p-3 rounded-2xl shadow-sm border backdrop-blur ${
          theme === "dark"
            ? "bg-slate-800/80 border-slate-700"
            : "bg-white/80 border-white"
        }`}>
          <input
            ref={focusRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="🔍 Search country..."
            className={`flex-1 px-4 py-2.5 border-2 rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition ${
              theme === "dark"
                ? "bg-slate-800 text-slate-100 border-slate-700"
                : "bg-white text-slate-800 border-slate-200"
            }`}
          />
          <RegionFilter region={region} setRegion={setRegion} />
        </div>

        <Stats filtered={filtered} />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className={`w-12 h-12 border-4 rounded-full animate-spin ${
              theme === "dark"
                ? "border-slate-700 border-t-blue-400"
                : "border-slate-300 border-t-blue-500"
            }`}></div>
          </div>
        ) : (
          <Cart filtered={filtered} />
        )}
      </div>
    </div>
  )
}