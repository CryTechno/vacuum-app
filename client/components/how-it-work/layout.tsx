
interface Props {
    id: number;
    content: string;
}
const Layout = ({id, content}: Props) => {
    return (
        <div className="w-[300px] flex flex-col bg-[#EDEDED] rounded-3xl py-[28px] px-[24px]">
            <div className="p-[24px] bg-button rounded-full flex justify-center items-center text-3xl text-monserrat font-bold mx-[84px]">
                {id}
            </div>
            <span className="text-center text-xl font-nunito text-black mt-[10px]">
                {content}
            </span>
        </div>
    )
}
export default Layout