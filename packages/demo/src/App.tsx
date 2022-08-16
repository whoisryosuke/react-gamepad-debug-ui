import React from "react"
import { Gamepad, GamepadProvider } from "gamepad-debug-ui"

type Props = {}

const App = (props: Props) => {
  return (
    <GamepadProvider>
    <div>
      <h1>App</h1>
      <Gamepad />
    </div>
    </GamepadProvider>
  )
}

export default App
