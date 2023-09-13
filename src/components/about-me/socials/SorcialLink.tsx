interface SorcialLinkProps {
  service: string;
  href: string;
}

const SorcialLink: React.FC<SorcialLinkProps> = ({ href, service }) => {
  return (
    <li>
      <a href={href}>{service}</a>
    </li>
  );
};

export default SorcialLink;
