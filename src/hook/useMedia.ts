import { useEffect, useState } from "react";

export default function useMedia(){
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
      useEffect(() => {
        const handleResize = () =>
          setScreenDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return {
      width:screenDimensions.width, 
      height:screenDimensions.height, 
      isTablet:screenDimensions.width <= 900,
      isPhone:screenDimensions.width <= 400

    }
}