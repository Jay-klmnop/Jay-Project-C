import FooterContent from "./FooterContent";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col items-center px-auto py-10 lg:items-start lg:px-20 lg:py-24 xl:px-32 2xl:px-52">
      <FooterContent className="lg:items-start" />
      <SocialLinks />
    </div>
  );
}
