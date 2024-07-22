import {HowItWorkProps} from "@/types/uiPropsTypes/ui";
const Layout = ({id, content}: HowItWorkProps) => {
    return (
            <div className="w-[300px] h-[222px] flex flex-col bg-[#EDEDED] rounded-3xl items-center pt-[28px]">
                <div className={`relative w-[84px] h-[84px] bg-button rounded-full flex justify-center items-center text-3xl text-monserrat font-bold `}>
                    <span className="absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        {id}
                    </span>
                </div>
                <span className="text-center text-xl leading-6 font-nunito text-black mt-[10px] px-[24px]">
                    {content}
                </span>
            </div>
    )
}
export default Layout