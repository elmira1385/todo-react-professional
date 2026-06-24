import { create } from 'zustand'

type TSearch = {
  search: string
  setSearch: (value:string) => void
}

export const useSearch = create<TSearch>()((set) => ({
search:"",
setSearch: (value) => set({search:value}),
}))

