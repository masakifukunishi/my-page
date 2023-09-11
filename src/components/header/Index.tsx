import Link from "next/link";
const Header = () => {
  return (
    <main className="">
      <div>Header</div>
      <Link href="/">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/socials">Socials</Link>
    </main>
  );
};

export default Header;
