import App from "./App";

const Apps = () => {
  return (
    <div>
      <h2 id="apps" className="text-3xl font-bold mb-6">
        Apps
      </h2>
      <App
        appName="Crypto Chart"
        imagePath="/apps/crypto-chart.png"
        description={`Crypto Chart is a full-stack MERN app. \n lets users view candlestick charts of cryptocurrencies for selected asset pairs and periods 📈`}
        links={[{ service: "GitHub", href: "https://github.com/masakifukunishi/crypto-chart" }]}
      />
      <App
        appName="PWA List"
        imagePath="/apps/pwa-list.png"
        description={`Web app that lets developers post PWAs and users view them. \n More than 150 PWAs have been submitted by developers 🙌`}
        links={[
          { service: "Live", href: "https://www.pwalist.app" },
          { service: "GitHub", href: "https://github.com/masakifukunishi/pwa-list" },
        ]}
      />
    </div>
  );
};

export default Apps;
