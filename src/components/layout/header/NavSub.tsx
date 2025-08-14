import InternalLink from "../../common/link/InternalLink";
import {
  CameraIcon,
  DesktopIcon,
  DeviceMobileIcon,
  GameControllerIcon,
  HeadphonesIcon,
  WatchIcon,
} from "@phosphor-icons/react";

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  const navItems = [
    { to: "/phones", label: "Phones", IconComponent: DeviceMobileIcon },
    { to: "/computers", label: "Computers", IconComponent: DesktopIcon },
    {
      to: "/smartwatches",
      label: "Smart Watches",
      IconComponent: WatchIcon,
    },
    { to: "/cameras", label: "Cameras", IconComponent: CameraIcon },
    { to: "/headphones", label: "Headphones", IconComponent: HeadphonesIcon },
    { to: "/gaming", label: "Gaming", IconComponent: GameControllerIcon },
  ];

  return (
    <div
      className={`w-full flex flex-row justify-around items-center px-28 text-white bg-zinc-900 divide-x divide-gray-400 ${className ?? ""}`}
    >
      {navItems.map(({ to, label, IconComponent }) => (
        <InternalLink
          key={to}
          to={to}
          className="
          flex flex-row items-center justify-center gap-x-2 
          w-full h-full px-4 py-2 opacity-70 hover:opacity-100 transition
          "
        >
          <IconComponent size={24} />
          <span className="text-sm"> {label}</span>
        </InternalLink>
      ))}
    </div>
  );
}
