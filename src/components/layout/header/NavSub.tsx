import InternalLink from "../../common/link/InternalLink";

import PhonesIcon from "../../common/icons/PhonesIcon";
import ComputersIcon from "../../common/icons/ComputersIcon";
import SmartWatchesIcon from "../../common/icons/SmartWatchesIcon";
import CamerasIcon from "../../common/icons/CamerasIcon";
import HeadphonesIcon from "../../common/icons/HeadphonesIcon";
import GamingIcon from "../../common/icons/GamingIcon";

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  const navItems = [
    { to: "/phones", label: "Phones", IconComponent: PhonesIcon },
    { to: "/computers", label: "Computers", IconComponent: ComputersIcon },
    {
      to: "/smartwatches",
      label: "Smart Watches",
      IconComponent: SmartWatchesIcon,
    },
    { to: "/cameras", label: "Cameras", IconComponent: CamerasIcon },
    { to: "/headphones", label: "Headphones", IconComponent: HeadphonesIcon },
    { to: "/gaming", label: "Gaming", IconComponent: GamingIcon },
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
          <IconComponent variant="small" />
          <span className="text-sm"> {label}</span>
        </InternalLink>
      ))}
    </div>
  );
}
