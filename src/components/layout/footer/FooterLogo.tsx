import Logo from "../../common/Logo";

interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className }: FooterLogoProps) {
  return (
    <div
      className={`flex flex-col items-center max-w-96 gap-2 mb-4 lg:items-start ${className ?? ""}`}
    >
      <Logo variant="white" />
      <p className="text-center text-sm lg:text-left">
        We are a residential interior design firm located in Portland. Our
        boutique-studio offers more than
      </p>
    </div>
  );
}
