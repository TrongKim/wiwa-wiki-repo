import Link from "next/link";

export const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);