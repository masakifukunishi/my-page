interface SorcialLinkProps {
  service: string;
  href: string;
}

const SorcialLink: React.FC<SorcialLinkProps> = ({ href, service }) => {
  return (
    <li className="list-disc list-inside mt-0.5">
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400">
        {service}
      </a>
    </li>
  );
};

export default SorcialLink;
