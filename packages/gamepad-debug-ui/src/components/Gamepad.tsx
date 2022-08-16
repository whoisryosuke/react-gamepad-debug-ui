import React from "react"
import { useGamepads } from "../context/GamepadContext";
import { GamepadTypes } from "../types";
import Dualshock4 from "./Dualshock4";

const GAMEPAD_TYPES: Record<GamepadTypes, React.ComponentType> = {
  'dualshock4': Dualshock4,
  'xboxone': Dualshock4,
}

type Props = {
  type: GamepadTypes
  scale: number
}

const Gamepad = ({ type = 'dualshock4', scale }: Props) => {
  const {gamepads} = useGamepads();

  // console.log('[GAMEPAD] Buttons?', gamepads)

  const currentGamepad = gamepads && 1 in gamepads ? gamepads[1] : false; 

  if(currentGamepad) {

    const buttonProps = {
      cross: currentGamepad.buttons[0].pressed,
      circle: currentGamepad.buttons[1].pressed,
      square: currentGamepad.buttons[2].pressed,
      triangle: currentGamepad.buttons[3].pressed,
      l1: currentGamepad.buttons[4].pressed,
      r1: currentGamepad.buttons[5].pressed,
      l2: currentGamepad.buttons[6].pressed,
      r2: currentGamepad.buttons[7].pressed,
      share: currentGamepad.buttons[8].pressed,
      option: currentGamepad.buttons[9].pressed,
      l3: currentGamepad.buttons[10].pressed,
      r3: currentGamepad.buttons[11].pressed,
      up: currentGamepad.buttons[12].pressed,
      down: currentGamepad.buttons[13].pressed,
      left: currentGamepad.buttons[14].pressed,
      right: currentGamepad.buttons[15].pressed,
      analogLeftHorizontal: currentGamepad.axes[0],
      analogLeftVertical: currentGamepad.axes[1],
      analogRightHorizontal: currentGamepad.axes[2],
      analogRightVertical: currentGamepad.axes[3],
    }

    const CurrentGamepad = GAMEPAD_TYPES[type];

    return <CurrentGamepad {...buttonProps} scale={scale} />
  }
  return <div>No gamepads detected</div>

}

export default Gamepad
