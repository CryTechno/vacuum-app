import { LinkNavButton } from "../buttons";
import navContent from "@/components/_mock/nav-text";


const NavMenu = () => {
  const listLinkNavButton = navContent.map((item) => {
    return (
      <li key={item.id}>
        <LinkNavButton href={`#${item.id}`}>{item.content}</LinkNavButton>
      </li>
    );
  });
  return (
    <nav className="my-5">
      <ul className="flex flex-row gap-6 text-2xl">
        {listLinkNavButton}
      </ul>
    </nav>
  );
};
export default NavMenu;
