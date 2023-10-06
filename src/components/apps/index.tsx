import App from "./App";

const Apps = () => {
  return (
    <div>
      <h2 id="apps" className="text-2xl font-bold mb-2">
        Apps
      </h2>
      <App
        appName="Crypto Chart"
        imagePath="/apps/crypto-chart.png"
        description={`Crypto Chart is a full-stack MERN app. \n lets users view candlestick charts of cryptocurrencies for selected asset pairs and periods 📈`}
        links={[
          { service: "Demo", href: "https://crypto-chart-1r7g.onrender.com" },
          { service: "GitHub", href: "https://github.com/masakifukunishi/crypto-chart" },
        ]}
      />
      <App
        appName="PWA List"
        imagePath="/apps/pwa-list.png"
        description={`Web app that lets developers post PWA and users view them. \n More than 150 PWA have been submitted by developers 🙌`}
        links={[
          { service: "App", href: "https://www.pwalist.app" },
          { service: "GitHub", href: "https://github.com/masakifukunishi/pwa-list" },
        ]}
      />
    </div>
  );
};

export default Apps;
