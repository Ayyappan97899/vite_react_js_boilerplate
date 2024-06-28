import { create } from 'zustand';

const useStore = create((set) => ({
  detail: {
    title: 'Vite + React',
  },

  setDetail: (data) => {
    set({ detail: data });
  },
}));

export default useStore;
