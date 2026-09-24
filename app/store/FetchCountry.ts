import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

export const useCountryStore = create(
  persist(
    (set) => ({
      countries: [],
      loading: true,
      error: null,
      searchTerm: "",

      setSearchTerm: (value) => set({ searchTerm: value }),

      fetchCountries: async () => {
        set({ loading: true, error: null })
        try {
          const response = await axios.get(
            "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
          )
          set({ countries: response.data, loading: false })
        } catch (err) {
          set({
            error: err.response?.data?.message || err.message,
            loading: false,
            countries: [],
          })
        }
      },
    }),
    {
      name: "countries-storage",
      partialize: (state) => ({
        countries: state.countries,
      }),
    }
  )
)