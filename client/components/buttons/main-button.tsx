import LayoutButton from "./layout";
interface Props {
  text?: string;
  svgComponent?: JSX.Element;
}

const MainButton: React.FC<Props> = ({ text, svgComponent }) => {
  return <LayoutButton text={text} svgComponent={svgComponent} />;
};

export default MainButton;
