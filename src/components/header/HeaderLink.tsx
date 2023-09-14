import Link from "next/link";

interface HeaderLinkProps {
  menu: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, menu }) => {
  return (
    <Link href={href} className="text-lg font-bold ml-4">
      {menu}
    </Link>
  );
};

export default HeaderLink;
