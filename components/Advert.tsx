import { useEffect, useState } from "react"
import ReactPlayer from "react-player/lazy"

const Advert = () => {
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])

  return (
    <div>
        {
            hasWindow &&
            <ReactPlayer
                url={"https://www.youtube.com/watch?v=TamxXebH0SQ"}
                width="15%"
                height="100%"
                style={{ position: "absolute", top: "7rem", left: "100rem" }}
                playing
                loop
                muted 
            />
        }
        {
             hasWindow &&
             <ReactPlayer
                 url={"https://www.youtube.com/watch?v=lky2P_aw6nc"}
                 width="15%"
                 height="100%"
                 style={{ position: "absolute", top: "7rem", left: "2rem" }}
                 playing
                 loop
                 muted 
             />
        }
    </div>
  )
}

export default Advert