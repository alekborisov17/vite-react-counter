
import { create } from 'zustand'

// TODO: implement increment and decrement actions and add type
const useCounterStore = create<any>((set) => ({
  value: 0,
  increment: () => set((state: any) => state),
  decrement: () => set((state: any) => state)
}))

export default useCounterStore
