import React from "react"
import GamepadBG from "../../assets/gamepads/dualshock4/CONTROLLER_BG.png"
import TRIANGLE from "../../assets/gamepads/dualshock4/TRIANGLE.png"
import SQUARE from "../../assets/gamepads/dualshock4/SQUARE.png"
import CIRCLE from "../../assets/gamepads/dualshock4/CIRCLE.png"
import CROSS from "../../assets/gamepads/dualshock4/CROSS.png"
import L1 from "../../assets/gamepads/dualshock4/L1.png"
import L2 from "../../assets/gamepads/dualshock4/L2.png"
import R1 from "../../assets/gamepads/dualshock4/R1.png"
import R2 from "../../assets/gamepads/dualshock4/R2.png"
import ANALOG_LEFT from "../../assets/gamepads/dualshock4/ANALOG_LEFT.png"
import ANALOG_RIGHT from "../../assets/gamepads/dualshock4/ANALOG_RIGHT.png"
import HOME from "../../assets/gamepads/dualshock4/HOME.png"
import SHARE from "../../assets/gamepads/dualshock4/SHARE.png"
import OPTIONS from "../../assets/gamepads/dualshock4/OPTIONS.png"
import DPAD_UP from "../../assets/gamepads/dualshock4/DPAD_UP.png"
import DPAD_DOWN from "../../assets/gamepads/dualshock4/DPAD_DOWN.png"
import DPAD_LEFT from "../../assets/gamepads/dualshock4/DPAD_LEFT.png"
import DPAD_RIGHT from "../../assets/gamepads/dualshock4/DPAD_RIGHT.png"

type Props = {
  scale: number
  // Face buttons
  square: boolean
  triangle: boolean
  cross: boolean
  circle: boolean

  // Triggers
  l1: boolean
  l2: boolean
  r1: boolean
  r2: boolean

  // Middle buttons
  share: boolean
  options: boolean
  home: boolean

  // DPad
  up: boolean
  left: boolean
  right: boolean
  down: boolean

  // Analog
  // -1 to 1 where -1 = down
  analogLeftVertical: number
  analogLeftHorizontal: number
  analogRightVertical: number
  analogRightHorizontal: number
  l3: boolean
  r3: boolean
}

const Dualshock4 = ({
  scale = 0.5,
  square,
  triangle,
  cross,
  circle,
  l1,
  l2,
  r1,
  r2,
  share,
  options,
  home,
  up,
  left,
  right,
  down,
  analogLeftVertical,
  analogLeftHorizontal,
  analogRightVertical,
  analogRightHorizontal,
  l3,
  r3
}: Props) => {
  return (
    <div style={{ position: "relative", width: "585px", height: "437px", transform: `scale(${scale})`, transformOrigin: "top left" }}>
      <img src={GamepadBG}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }} />

      {/* Face buttons */}
      <img
        src={TRIANGLE}
        style={{
          position: "absolute",
          left: 455,
          top: 116,
          opacity: triangle ? "0.5" : "1"
        }}
      />
      <img
        src={SQUARE}
        style={{
          position: "absolute",
          left: 412,
          top: 159,
          opacity: square ? "0.5" : "1"
        }}
      />
      <img
        src={CIRCLE}
        style={{
          position: "absolute",
          left: 498,
          top: 159,
          opacity: circle ? "0.5" : "1"
        }}
      />
      <img
        src={CROSS}
        style={{
          position: "absolute",
          left: 455,
          top: 203,
          opacity: cross ? "0.5" : "1"
        }}
      />

      {/* Middle buttons */}
      <img
        src={HOME}
        style={{
          position: "absolute",
          left: 275,
          top: 243,
          opacity: home ? "0.5" : "1"
        }}
      />
      <img
        src={SHARE}
        style={{
          position: "absolute",
          left: 162,
          top: 104,
          opacity: share ? "0.5" : "1"
        }}
      />
      <img
        src={OPTIONS}
        style={{
          position: "absolute",
          left: 402,
          top: 104,
          opacity: options ? "0.5" : "1"
        }}
      />

      {/* Triggers */}
      <img
        src={L1}
        style={{
          position: "absolute",
          left: 77,
          top: 70,
          opacity: l1 ? "0.5" : "1"
        }}
      />
      <img
        src={L2}
        style={{
          position: "absolute",
          left: 79,
          top: 0,
          opacity: l2 ? "0.5" : "1"
        }}
      />
      <img
        src={R1}
        style={{
          position: "absolute",
          left: 437,
          top: 70,
          opacity: r1 ? "0.5" : "1"
        }}
      />
      <img
        src={R2}
        style={{
          position: "absolute",
          left: 434,
          top: 0,
          opacity: r2 ? "0.5" : "1"
        }}
      />

      {/* Analog sticks */}
      <img
        src={ANALOG_LEFT}
        style={{
          position: "absolute",
          left: 162,
          top: 224,
          opacity: l3 ? "0.5" : "1",
          transform: `translate(${analogLeftHorizontal * 10}px, ${analogLeftVertical * 10}px)`
        }}
      />
      <img
        src={ANALOG_RIGHT}
        style={{
          position: "absolute",
          left: 350,
          top: 224,
          opacity: r3 ? "0.5" : "1",
          transform: `translate(${analogRightHorizontal * 10}px, ${analogRightVertical * 10}px)`
        }}
      />

      {/* DPad */}
      <img
        src={DPAD_UP}
        style={{
          position: "absolute",
          left: 92,
          top: 129,
          opacity: up ? "0.5" : "1"
        }}
      />
      <img
        src={DPAD_DOWN}
        style={{
          position: "absolute",
          left: 92,
          top: 186,
          opacity: down ? "0.5" : "1"
        }}
      />
      <img
        src={DPAD_LEFT}
        style={{
          position: "absolute",
          left: 58,
          top: 162,
          opacity: left ? "0.5" : "1"
        }}
      />
      <img
        src={DPAD_RIGHT}
        style={{
          position: "absolute",
          left: 115,
          top: 162,
          opacity: right ? "0.5" : "1"
        }}
      />
    </div>
  )
}

export default Dualshock4
