import React, { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react"
import { createJoymap, createQueryModule, Joymap, QueryModule } from "joymap"
import { useGamepadStore } from "../store/store"

interface Props {
  maxGamepads?: number
}

export const GamepadProvider = ({ children, maxGamepads = 4 }: PropsWithChildren<Props>) => {
  // const joymap = useRef<Joymap | null>(null)
  // const [gamepads, setGamepads] = useState<Gamepads[] | null>(null)
  const { joymap, gamepads, setGamepads, setJoymap } = useGamepadStore();

  useEffect(() => {
    // Initialize Joymap and gamepad "modules"
    if(joymap === null) {
    const newJoymap = createJoymap({
      onPoll(...args) {
        console.log("default poll still here", ...args)
      }
    })
    console.log('[GAMEPAD] Init joymap', newJoymap)

    // We create "gamepads" to embody each separate gamepad
    const newGamepads = Array(maxGamepads)
      .fill(0)
      .map((_, index) => {
        const gamepad = createQueryModule()
        if (newJoymap) newJoymap.addModule(gamepad)

        return {
          // We add 1 to index so it starts from Gamepad1
          name: `Gamepad${index + 1}`,
          gamepad
        }
      })

    setJoymap(newJoymap);
    if (newGamepads) setGamepads(newGamepads)
    console.log('[GAMEPAD] Init gamepads', newGamepads)
    }

    // Run Joymap's polling
    if (joymap !== null) joymap.start()
    console.log('[GAMEPAD] Starting gamepads')

    return () => {
      // End polling
      console.log('[GAMEPAD] Stopping gamepads')
      if (joymap !== null) joymap.stop()
    }
  }, [])

  console.log('[GAMEPADS] Current gamepads', gamepads)

  return <>{children}</>
  
}
