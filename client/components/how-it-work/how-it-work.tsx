import { useEffect, useState } from "react";
import { Title } from "../title";
import  HowItWorkCards  from "./how-it-work-cards";


const HowItWork = () => {
    const [currentWidth, setCurrentWidth] = useState<number>(0);
    
    useEffect(() => {
        setCurrentWidth(window.innerWidth);
        console.log(currentWidth);
    }, [currentWidth])

    return (
        <div className="flex flex-col items-center ">
            <Title title="Як це працює?"/>
            <HowItWorkCards/>
        </div>
        
    )
}
export default HowItWork