interface Props {
    content?: string;
    svgComponent: JSX.Element;
};

const Layout = ({content, svgComponent}: Props) => {
    return <div className="flex flex-col items-center py-[16px] px-[32px] bg-benefits rounded-3xl w-[300px]">
        <div className="fill-white w-[64px]">
            {svgComponent}
        </div>
        <span className="text-center text-xl font-nunito text-white mt-[10px]">{content}</span>
    </div>;
}
export default Layout