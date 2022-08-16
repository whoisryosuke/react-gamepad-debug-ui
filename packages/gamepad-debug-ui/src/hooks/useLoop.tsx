import { useEffect, useState } from "react"

const useLoop = (callback: (time: DOMHighResTimeStamp) => void) => {
    const [frameTime, setFrameTime] = useState<DOMHighResTimeStamp>()

    useEffect(() => {
        let animationCallback: number;
        
        const animationLoop = (time: DOMHighResTimeStamp) => {
            setFrameTime(time);

            //Run our callback
            callback(time);
            
            // Here's where we "loop" infinitely
            animationCallback = requestAnimationFrame(animationLoop)
        }

        requestAnimationFrame(animationLoop)

        return () => {
            cancelAnimationFrame(animationCallback);
        }
    }, [])
    
    return frameTime;
}

export default useLoop;