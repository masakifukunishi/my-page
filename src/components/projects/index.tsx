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
        description={`Demonstrating the implementation of a blog service using Domain-Driven Design (DDD) and Layered Architecture principles. \n Docker, TypeScript, Node.js, Express, Prisma, SQLite, Vitest, ESLint, Prettier, GitHub Actions (CI)`}
        links={[{ service: "GitHub", href: "https://github.com/masakifukunishi/ddd-blog-api" }]}
      />
      <Project
        appName="NFT Craft"
        imagePath="/projects/nft-craft.png"
        description={`Web app that allows users to mint NFTs (ERC-721 tokens) and view them.`}
        links={[
          { service: "App (Testnet)", href: "https://nft-craft-ten.vercel.app" },
          { service: "GitHub", href: "https://github.com/masakifukunishi/nft-craft" },
        ]}
      />
      <Project
        appName="Crypto Chart"
        imagePath="/projects/crypto-chart.png"
        description={`Full-stack MERN app. \n Lets users view candlestick charts of cryptocurrencies for selected asset pairs and periods 📈`}
        links={[{ service: "GitHub", href: "https://github.com/masakifukunishi/crypto-chart" }]}
      />
      <Project
        appName="PWA List"
        imagePath="/projects/pwa-list.png"
        description={`Web app that lets developers post PWA and users view them. \n More than 300 PWA have been submitted by developers!`}
        links={[{ service: "App", href: "https://www.pwalist.app", isStrikethrough: true }]}
      />
    </div>
  );
};

export default Projects;
