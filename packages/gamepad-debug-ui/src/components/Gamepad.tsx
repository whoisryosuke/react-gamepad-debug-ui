import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useGamepads } from "../context/GamepadContext";
import useLoop from "../hooks/useLoop";
import { useGamepadStore } from "../store/store";
import Dualshock4 from "./Dualshock4";

// We create a map between the Input Map and the Gamepad inputs
// e.g. Jump might be "x" on PS4 controller - or an ID like 13
const GAMEPAD_MAP = {
  start: "Jump",
  dpadUp: "MoveUp",
  dpadDown: "MoveDown"
}
type GamepadButtons = keyof typeof GAMEPAD_MAP; 
type ButtonState = Record<GamepadButtons, boolean>; 

type Props = {}

const Gamepad = ({ maxGamepads = 4 }: Props) => {
  const {gamepads} = useGamepads();

  // console.log('[GAMEPAD] Buttons?', gamepads)

  const currentGamepad = 1 in gamepads ? gamepads[1] : false; 

  if(currentGamepad) {

    const buttonProps = {
      cross: currentGamepad.buttons[0].pressed,
      circle: currentGamepad.buttons[1].pressed,
      square: currentGamepad.buttons[2].pressed,
      triangle: currentGamepad.buttons[3].pressed,
      analogLeftHorizontal: currentGamepad.axes[0],
      analogLeftVertical: currentGamepad.axes[1],
    }

    return <Dualshock4 {...buttonProps} />
  }
  return <div>No gamepads detected</div>

}

export default Gamepad
