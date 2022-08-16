import React, { useEffect, useRef, useState } from "react"
import { useGamepads } from "../context/GamepadContext"
import useLoop from "../hooks/useLoop";
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
  const [buttons, setButtons] = useState<ButtonState>({
    start: false,
    dpadUp: false,
    dpadDown: false,
  })
  const {gamepads} = useGamepads();
  if(!gamepads || gamepads.length <= 0) return <div>No gamepads detected</div>

  const playerOne = gamepads[0];

  console.log('gamepads', playerOne, playerOne.gamepad.getButtons())
  console.log('buttons', buttons)

  const setButton = (buttonName: string, pressed: boolean) => {
    setButtons((prevButtons) => ({
      ...prevButtons,
      [buttonName]: pressed
    }))
  }
  
  useLoop(() => {
    // console.log('gamepads 1', gamepads[0].gamepad.getAllButtons())
    // console.log('gamepads 2', gamepads[1].gamepad.getAllButtons())

    // Loop through input keys and match to our "map" above
    Object.keys(GAMEPAD_MAP).forEach((inputKey) => {
      // We check the current state of the input
      const checkKey = buttons[inputKey];
      const newInput = gamepads[0].gamepad.getButton(inputKey)

      // If state is different, we update (to avoid expensive recalls)
      if (checkKey !== playerOne.gamepad.getButton(GAMEPAD_MAP[inputKey]).pressed) {
        console.log("gamepad pressed", inputKey)
        setButton(inputKey, newInput.pressed)
      }
    })

  })

  const buttonProps = {
    square: true,
  }

  return <Dualshock4 {...buttonProps} />
}

export default Gamepad
