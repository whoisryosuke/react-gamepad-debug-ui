import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { createJoymap, createQueryModule, Joymap, QueryModule } from "joymap"

export type Gamepads = {
  name: string
  gamepad: QueryModule
}

interface GamepadContextInterface {
  joymap: Joymap | null
  gamepads: Gamepads[] | null
}

const DEFAULT_CONTEXT: GamepadContextInterface = {
  joymap: null,
  gamepads: null
}


const GamepadContext = createContext<GamepadContextInterface>(DEFAULT_CONTEXT)

interface Props {
  maxGamepads?: number
}

export const GamepadProvider = ({ children, maxGamepads = 4 }: PropsWithChildren<Props>) => {
  const [joymap, setJoymap] = useState<Joymap | null>(null)
  const [gamepads, setGamepads] = useState<Gamepads[] | null>(null)

  useEffect(() => {
    const newJoymap = createJoymap({
      onPoll() {
        // console.log("default poll still here")
      }
    })
    setJoymap(newJoymap)
    console.log('[GAMEPAD] Init joymap', newJoymap)

    // We create "gamepads" to embody each separate gamepad
    const newGamepads = Array(maxGamepads)
      .fill(0)
      .map((_, index) => {
        const gamepad = createQueryModule()
        if (joymap) joymap.addModule(gamepad)

        return {
          // We add 1 to index so it starts from Gamepad1
          name: `Gamepad${index + 1}`,
          gamepad
        }
      })

    if (newGamepads) setGamepads(newGamepads)
    console.log('[GAMEPAD] Init gamepads', newGamepads)

    if (joymap) joymap.start()

    return () => {
      if (joymap) joymap.stop()
    }
  }, [])

  return (
    <GamepadContext.Provider
      value={{
        joymap,
        gamepads
      }}
    >
      {children}
    </GamepadContext.Provider>
  )
}

export const useGamepads = () => useContext(GamepadContext)
