import Image from "next/image";

interface AppProps {
  appName: string;
  imagePath: string;
  description: string;
  links: {
    service: string;
    href: string;
  }[];
}

const App: React.FC<AppProps> = ({ appName, imagePath, description, links }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold mb-2 mt-2">{appName}</h3>
      <Image src={imagePath} width={768} height={768} alt={`Screenshot of ${appName}`} />
      <div className="mt-3">
        {description.split("\n").map((line, index) => (
          <p key={index} className="mb-0.5">
            {line}
          </p>
        ))}
      </div>
      <ul className="mt-2">
        {links.map((link, index) => (
          <li key={index} className="list-disc list-inside mb-0.5">
            <a href={link.href} className="text-blue-400" target="_blank" rel="noopener noreferrer">
              {link.service}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
