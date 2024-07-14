import LayerButton from "./layer";
interface Props {
  text?: string;
  svgComponent?: JSX.Element;
}

const MainButton: React.FC<Props> = ({ text, svgComponent }) => {
  return <LayerButton text={text} svgComponent={svgComponent} />;
};

export default MainButton;
