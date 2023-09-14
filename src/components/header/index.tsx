import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-800 h-14 px-8 flex items-center">
      <h1 className="text-2xl font-semibold">Masaki Fukunishi</h1>
      <div className="ml-auto">
        <Link href="/" className="text-lg font-bold ml-4">
          About
        </Link>
        <Link href="/" className="text-lg font-bold ml-4">
          Apps
        </Link>
      </div>
    </div>
  );
};

export default Header;
