import { HowItWorkContent } from "../_mock";
import Layout from "./layout";

const HowItWorkCards = () => {
    const listHowItWork = HowItWorkContent.map(item => {
        // if (item.id % 3 === 0) {
        //     return (
                
        //     )
        return (
            <Layout key={item.id} id={item.id} content={item.content} />
        )
    })
    return (
        <div className="flex flex-row flex-wrap justify-center gap-[92px] mt-[42px]">
            {listHowItWork}
        </div>
    )
}

export default HowItWorkCards