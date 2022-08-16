import React from "react"
import { Gamepad } from "gamepad-debug-ui"

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <h1>App</h1>
      <Gamepad />
    </div>
  )
}

export default App
