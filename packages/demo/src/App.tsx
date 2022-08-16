import React from "react"
import { Gamepad, GamepadsProvider } from "gamepad-debug-ui"

type Props = {}

const App = (props: Props) => {
  return (
    <GamepadsProvider>
    <div>
      <h1>Gamepad Debug UI</h1>
      <Gamepad scale={1} />
    </div>
    </GamepadsProvider>
  )
}

export default App
