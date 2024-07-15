import Link from "next/link";
import { MainButton } from "../buttons";
import { CartSvg, LogoSvg } from "../icons";
import { NavMenu } from "../nav-menu";


const Header = () => {
  return (
    <header>
      <div className="sticky top-0 flex justify-center gap-6 backdrop-blur bg-header/[.77] text-white text-regular text-2xl ">
        <div className="flex items-center text-3xl text-bold ">
          <div className="flex justify-center cursor-pointer h-[72px] ">
            <Link className="transition duration-2000 hover:scale-125" href = "/"><LogoSvg /></Link>
          </div>
        </div>
        <NavMenu />
        <div className="flex ml-[51px] my-3">
        <MainButton text="Купити зараз" svgComponent={<CartSvg />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
