import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  /** Drop the dark background of the PNG so the glow blends into the page. */
  blend?: boolean;
  priority?: boolean;
};

export default function BrandSigil({
  size = 140,
  className,
  blend = true,
  priority = false,
}: Props) {
  return (
    <Image
      src="/images/qsr-symbol-clean.png"
      alt="Quantum Shamanic Reiki sigil"
      width={size}
      height={size}
      priority={priority}
      className={className}
      style={blend ? { mixBlendMode: "screen" } : undefined}
    />
  );
}
