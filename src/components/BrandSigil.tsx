import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export default function BrandSigil({
  size = 140,
  className,
  priority = false,
}: Props) {
  return (
    <Image
      src="/images/qsr-vercel-symbol-transparent-no-c9x.png"
      alt="Quantum Shamanic Reiki sigil"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
