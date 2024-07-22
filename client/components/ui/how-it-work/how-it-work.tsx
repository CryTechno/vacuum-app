import { useEffect, useState } from "react";
import { Title } from "../title";
import  HowItWorkCards  from "./how-it-work-cards";



const HowItWork = () => {
    const [currentViewWidth, setCurrentViewWidth] = useState<number>(0);
    
    useEffect(() => {
        setCurrentViewWidth(window.innerWidth);
        console.log(currentViewWidth);
    }, [currentViewWidth])

    return (
        <div className="relative flex flex-col items-center">
            <Title title="Як це працює?"/>
            <HowItWorkCards/>
        </div>
        
    )
}
export default HowItWork