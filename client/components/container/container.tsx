interface Props {
    children?: JSX.Element;
}
const Container: React.FC<Props> = ({ children }) => {
    return <div className="flex flex-col items-center mx-auto my-0 w-[1090px]">{children}</div>;
};

export default Container;
