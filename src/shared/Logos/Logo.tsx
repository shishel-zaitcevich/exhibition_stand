import Image from 'next/image';

export interface LogoProps {
  logoSrc: string;
  sx?: object;
}

export function Logo({ logoSrc }: LogoProps) {
  return (
    <Image src={logoSrc} alt="tanker" width={150} height={50} style={{ objectFit: 'contain' }} />
  );
}
