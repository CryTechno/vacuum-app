interface Props {
  text?: string;
  svgComponent?: JSX.Element;
}
const LayerButton: React.FC<Props> = ({ text, svgComponent }) => {
  return (
    <button className="flex flex-row items-center ml-[51px] my-3 px-6 text-white bg-button border-0 rounded-lg shadow-lg shadow-black/25 gap-3.5 hover:bg-howerButton hover:shadow-howerButton/25 hover:text-black hover:color transition duration-300 fill-white hover:fill-black">
      <span>{text}</span> {svgComponent}
    </button>
  );
};

export default LayerButton;
