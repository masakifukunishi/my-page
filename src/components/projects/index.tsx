import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <h2 id="projects" className="text-2xl font-bold mb-2">
        Projects
      </h2>
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
        description={`Web app that lets developers post PWA and users view them. \n More than 200 PWA have been submitted by developers!`}
        links={[{ service: "App", href: "https://www.pwalist.app" }]}
      />
    </div>
  );
};

export default Projects;