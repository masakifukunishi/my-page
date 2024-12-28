import Link from "next/link";

interface MobileNavigationLinkProps {
  menu: string;
  href: string;
  handleClick: () => void;
}

const MobileNavigationLink: React.FC<MobileNavigationLinkProps> = ({ href, menu, handleClick }) => {
  return (
    <Link href={href} className="text-xl font-semibold mt-3" onClick={handleClick}>
      {menu}
    </Link>
  );
};

export default MobileNavigationLink;
