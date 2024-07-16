interface Props {
    children?: JSX.Element;
}
const Container = ({ children }: Props) => {
    return <div className="flex flex-col items-center mx-auto my-0 w-[1090px]">{children}</div>;
};

export default Container;
