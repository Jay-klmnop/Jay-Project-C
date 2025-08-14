import Logo from "../../common/Logo";
import SearchInput from "../../common/SearchInput";
import NavMain from "./NavMain";
import UserActions from "./UserActions";
import InternalLink from "../../common/link/InternalLink";
import NavSub from "./NavSub";
import { ListIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10 w-full">
      <div className="container mx-auto px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
        <div className="flex justify-between items-center py-4  h-20">
          <div className="flex items-center gap-6 grow max-w-4xl">
            <InternalLink to="/">
              <Logo variant="blank" className="shrink-0" />
            </InternalLink>
            <SearchInput containerClassName="w-full mr-15p hidden md:block" />
          </div>

          <div className="flex items-center shrink-0 gap-16 lg:max-w-xl">
            <NavMain className="hidden lg:flex" />
            <UserActions className="hidden sm:flex" />
          </div>
          <button className="ml-5 lg:hidden">
            <ListIcon size={36} />
          </button>
        </div>
      </div>
      <div className="hidden 2xl:flex w-full">
        <NavSub />
      </div>
    </header>
  );
}
