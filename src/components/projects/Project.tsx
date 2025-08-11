interface ProjectProps {
  appName: string;
  imagePath?: string;
  description: string;
  links: {
    service: string;
    href: string;
    isStrikethrough?: boolean;
  }[];
}

const Project: React.FC<ProjectProps> = ({ appName, imagePath, description, links }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold mb-2 mt-2">{appName}</h3>
      {/* Since I'm on the free plan, I'm not using next/image */}
      {imagePath && <img className="rounded-md" src={imagePath} width={650} height={650} alt={`Screenshot of ${appName}`} />}
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
            <a
              href={link.isStrikethrough ? undefined : link.href}
              className={`text-blue-400 ${link.isStrikethrough ? "line-through pointer-events-none" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.service}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
