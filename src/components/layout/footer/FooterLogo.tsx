interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className }: FooterLogoProps) {
  return (
    <div className={`flex flex-col items-start ${className ?? ""}`}>
      <div className="text-left text-xs font-black">C:ODE</div>
      <p className="text-left text-xs">
        At C:ODE, we believe great style is like great code: elegant, efficient,
        and built to last. We craft essential apparel that debugs your morning
        routine.
      </p>
    </div>
  );
}
