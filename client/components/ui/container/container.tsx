import {containerProps} from "@/types/uiPropsTypes/ui";
const Container = ({ children }: containerProps) => {
    return <div className="flex flex-col items-center mx-auto my-0 w-[1090px]">{children}</div>;
};

export default Container;
