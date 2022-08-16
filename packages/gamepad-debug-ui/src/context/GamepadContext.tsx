import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface GamepadContextData {
  gamepads?: Record<number, Gamepad>;
  setGamepads?: React.Dispatch<React.SetStateAction<Gamepad[]>>;
}

const GamepadsContext = createContext<GamepadContextData>({});

interface GamepadsProviderProps {
}

export const GamepadsProvider = ({ children }: PropsWithChildren<GamepadsProviderProps>) => {
  const [gamepads, setGamepads] = useState({});
  const requestRef = useRef<number>();

  var haveEvents = 'ongamepadconnected' in window;

  const addGamepad = useCallback(
    (gamepad: Gamepad) => {
      setGamepads({
        ...gamepads,
        [gamepad.index]: {
          buttons: gamepad.buttons,
          id: gamepad.id,
          axes: gamepad.axes,
        },
      });

      // Handle controller input before render
      // requestAnimationFrame(updateStatus);
    },
    [gamepads, setGamepads]
  );

  /**
   * Adds game controllers during connection event listener
   * @param {object} e
   */
  const connectGamepadHandler = (e: Event) => {
    addGamepad((e as GamepadEvent).gamepad);
  };

  /**
   * Finds all gamepads and adds them to context
   */
  const scanGamepads = useCallback(() => {
    // Grab gamepads from browser API
    var detectedGamepads = navigator.getGamepads
      ? navigator.getGamepads()
      // @ts-ignore
      : navigator.webkitGetGamepads
      // @ts-ignore
      ? navigator.webkitGetGamepads()
      : [];

    // Loop through all detected controllers and add if not already in state
    for (var i = 0; i < detectedGamepads.length; i++) {
      if (detectedGamepads[i]) {
        addGamepad(detectedGamepads[i]);
      }
    }
  }, [addGamepad]);

  // Add event listener for gamepad connecting
  useEffect(() => {
    window.addEventListener('gamepadconnected', connectGamepadHandler);

    return window.removeEventListener(
      'gamepadconnected',
      connectGamepadHandler
    );
  });

  // Update each gamepad's status on each "tick"
  const animate = useCallback(() => {
    if (!haveEvents) scanGamepads();
    requestRef.current = requestAnimationFrame(animate);
  }, [requestRef, scanGamepads, haveEvents]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [animate]);

  return (
    <GamepadsContext.Provider value={{ gamepads, setGamepads }}>
      {children}
    </GamepadsContext.Provider>
  );
};

export const useGamepads = () => useContext(GamepadsContext);