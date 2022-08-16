import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Joymap, QueryModule } from "joymap"

export type Gamepads = {
  name: string
  gamepad: QueryModule
}

interface GamepadState {
  joymap: Joymap | null
  gamepads: Gamepads[] | null
  setJoymap: (joymap: Joymap) => void
  setGamepads: (gamepads:  Gamepads[]) => void
}

export const useGamepadStore = create<GamepadState>()(
  devtools((set) => ({
      joymap: null,
      gamepads: null,
      setJoymap: (joymap) => set(() => ({ joymap })),
      setGamepads: (gamepads) => set(() => ({ gamepads })),
    })
  )
)