import LayoutButton from "./layout";
interface Props {
  text?: string;
  svgComponent?: JSX.Element;
}

const MainButton = ({ text, svgComponent }: Props) => {
  return <LayoutButton text={text} svgComponent={svgComponent} />;
};

export default MainButton;
