import Logo from "../../common/icons/Logo";
import BurgerIcon from "../../common/icons/BurgerIcon";
import SearchInput from "../../common/SearchInput";
import NavMain from "./NavMain";
import UserActions from "./UserActions";
import InternalLink from "../../common/link/InternalLink";
import NavSub from "./NavSub";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10 w-full">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-6 grow max-w-4xl">
            <InternalLink to="/">
              <Logo variant="black" className="shrink-0 py" />
            </InternalLink>
            <SearchInput containerClassName="w-full mr-15p hidden sm:block" />
          </div>

          <div className="flex items-center shrink-0 gap-16 lg:max-w-xl">
            <NavMain className="hidden lg:flex" />
            <UserActions className="hidden md:flex" />
          </div>
          <BurgerIcon className="lg:hidden" />
        </div>
      </div>
      <div className="hidden 2xl:flex w-full">
        <NavSub />
      </div>
    </header>
  );
}
