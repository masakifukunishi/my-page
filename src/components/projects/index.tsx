import Project from "./Project";

const Projects = () => {
  return (
    <div className="mt-10">
      <h2 id="projects" className="text-2xl font-semibold mb-4">
        Projects
      </h2>
      <Project
        appName="RelaxCast"
        imagePath="/projects/relaxcast.png"
        description={`Internet radio streaming service using Icecast2 and Liquidsoap.`}
        links={[
          { service: "GitHub (client)", href: "https://github.com/masakifukunishi/relaxcast-client" },
          { service: "GitHub (streaming server)", href: "https://github.com/masakifukunishi/relaxcast-streaming" },
        ]}
      />
      <Project
        appName="Blog service with DDD (Sample Project)"
        description={`A sample blog service demonstrating Domain-Driven Design (DDD) and layered architecture. \n Skills : Docker, TypeScript, Node.js, Express, Prisma, SQLite, Vitest, ESLint, Prettier, GitHub Actions (CI)`}
        links={[{ service: "GitHub", href: "https://github.com/masakifukunishi/ddd-blog-api" }]}
      />
      <Project
        appName="NFT Craft"
        imagePath="/projects/nft-craft.png"
        description={`A web app that allows users to mint and view NFTs (ERC-721 tokens).`}
        links={[
          { service: "App (Testnet)", href: "https://nft-craft-ten.vercel.app" },
          { service: "GitHub", href: "https://github.com/masakifukunishi/nft-craft" },
        ]}
      />
      <Project
        appName="Crypto Chart"
        imagePath="/projects/crypto-chart.png"
        description={`A full-stack MERN app that lets users view candlestick charts for selected cryptocurrency pairs and time periods. 📈`}
        links={[{ service: "GitHub", href: "https://github.com/masakifukunishi/crypto-chart" }]}
      />
      <Project
        appName="PWA List"
        imagePath="/projects/pwa-list.png"
        description={`A web app that lets developers submit PWAs and users discover them. \n More than 300 PWAs have been submitted by developers!`}
        links={[{ service: "App", href: "https://www.pwalist.app", isStrikethrough: true }]}
      />
    </div>
  );
};

export default Projects;
