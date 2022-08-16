import React from "react"
import { Gamepad, GamepadsProvider } from "gamepad-debug-ui"

type Props = {}

const App = (props: Props) => {
  return (
    <GamepadsProvider>
    <div>
      <h1>App</h1>
      <Gamepad />
    </div>
    </GamepadsProvider>
  )
}

export default App
