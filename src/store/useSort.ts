import { create } from 'zustand'

type TSort = {
  sort: "asc"|"desc"
  setSort: (value: "asc"|"desc") => void
}

export const useSort = create<TSort>()((set) => ({
sort:"asc",
setSort: (value) => set({sort:value}),
}))

