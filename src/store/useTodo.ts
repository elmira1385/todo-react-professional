import { create } from "zustand";
import { persist } from "zustand/middleware";
export type TTodo = {
  id: string;
  title: string;
  data: string;
  status: "pending" | "completed";
};
type TTodoList = {
  todo: TTodo[];
  setTodo: (todo: { id: string; title: string; data: string }) => void;
  toggleStatus: (id: string) => void;
  clearOne: (id: string) => void;
  editTitle: (id: string, newTitle: string) => void;
  editData: (id: string, newData: string) => void;
  clearAll: () => void;
  isEditing: string | null;
  setIsEditing: (value: string | null) => void;
  title: string;
  setTitle: (value: string) => void;
  data: string;
  setData: (value: string) => void;
};

export const useTodo = create<TTodoList>()(
  persist(
    (set) => ({
      todo: [],
      setTodo: (newItem) =>
        set((prev) => ({
          todo: [...prev.todo, { ...newItem, status: "pending" }],
        })),
      toggleStatus: (id) =>
        set((prev) => ({
          todo: prev.todo.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: item.status === "pending" ? "completed" : "pending",
                }
              : item,
          ),
        })),
      clearOne: (id) =>
        set((prev) => ({ todo: prev.todo.filter((item) => item.id !== id) })),
      editTitle: (id, newTitle) =>
        set((prev) => ({
          todo: prev.todo.map((item) =>
            item.id === id ? { ...item, title: newTitle } : item,
          ),
        })),
      editData: (id, newData) =>
        set((prev) => ({
          todo: prev.todo.map((item) =>
            item.id === id ? { ...item, data: newData } : item,
          ),
        })),
      clearAll: () => set({ todo: [] }),
      isEditing: null,
      setIsEditing: (value) => set({ isEditing: value }),
      title: "",
      setTitle: (value) => set({ title: value }),
      data: "",
      setData: (value) => set({ data: value }),
    }),
    {
      name: "todo",
    },
  ),
);
