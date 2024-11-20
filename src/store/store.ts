import { create } from 'zustand'

// TODO: implement increment and decrement actions
const useCounterStore = create((set) => ({
  value: 0,
  increment: () => set((state) => state),
  decrement: () => set((state) => (state))
}))

export default useCounterStore