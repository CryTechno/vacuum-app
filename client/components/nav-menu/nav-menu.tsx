import { LinkNavButton } from "../buttons";
const NavMenu = () => {
  return (
    <nav className="my-5">
      <ul className="flex flex-row gap-6 text-2xl">
        <li>
          <LinkNavButton href={{ pathname: "#benefits" }}>
            Переваги
          </LinkNavButton>
        </li>
        <li>
          <LinkNavButton href={{ pathname: "#how-it-works" }}>
            Як це працює
          </LinkNavButton>
        </li>
        <li>
          <LinkNavButton href={{ pathname: "#products" }}>
            Продукція
          </LinkNavButton>
        </li>
        <li>
          <LinkNavButton href={{ pathname: "#reviews" }}>Відгуки</LinkNavButton>
        </li>
        <li>
          <LinkNavButton href={{ pathname: "#contact" }}>Зв’язок</LinkNavButton>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
