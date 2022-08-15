import React from 'react'
import GamepadBG from "../../assets/gamepads/dualshock4/CONTROLLER_BG.png"

type Props = {}

const Gamepad = (props: Props) => {
  return (
    <div>
        <img src={GamepadBG} />
    </div>
  )
}

export default Gamepad