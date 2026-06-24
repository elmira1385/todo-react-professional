import { create } from 'zustand'

type TFilter = {
  filter: "all"|"pending"|"completed"
  setFilter: (value:"all"|"pending"|"completed") => void
}

export const useFilter = create<TFilter>()((set) => ({
filter:"all",
setFilter: (value) => set({filter:value}),
}))

