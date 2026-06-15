export type ProjectItem = {
  appName: string;
  imagePath?: string;
  description: {
    ja: string;
    en: string;
  };
  links: {
    service: string;
    href: string;
    isStrikethrough?: boolean;
  }[];
};

export const projects: ProjectItem[] = [
  {
    appName: "RelaxCast",
    imagePath: "/projects/relaxcast.png",
    description: {
      ja: `Icecast2 と Liquidsoap を使ったインターネットラジオのようなサービスです。`,
      en: `An internet radio-like service using Icecast2 and Liquidsoap.`,
    },
    links: [
      { service: "GitHub (client)", href: "https://github.com/masakifukunishi/relaxcast-client" },
      { service: "GitHub (streaming server)", href: "https://github.com/masakifukunishi/relaxcast-streaming" },
    ],
  },
  {
    appName: "Blog service with DDD",
    description: {
      ja: `ドメイン駆動設計（DDD）とレイヤードアーキテクチャを使ったサンプルのブログサービスです。 \n Skills : Docker, TypeScript, Node.js, Express, Prisma, SQLite, Vitest, ESLint, Prettier, GitHub Actions (CI)`,
      en: `A sample blog service using Domain-Driven Design (DDD) and layered architecture. \n Skills : Docker, TypeScript, Node.js, Express, Prisma, SQLite, Vitest, ESLint, Prettier, GitHub Actions (CI)`,
    },
    links: [{ service: "GitHub", href: "https://github.com/masakifukunishi/ddd-blog-api" }],
  },
  {
    appName: "NFT Craft",
    imagePath: "/projects/nft-craft.png",
    description: {
      ja: `NFT（ERC-721のトークン）のミントと閲覧ができるWebアプリです。`,
      en: `A web app that allows users to mint and view NFTs (ERC-721 tokens).`,
    },
    links: [
      { service: "App (Testnet)", href: "https://nft-craft-ten.vercel.app" },
      { service: "GitHub", href: "https://github.com/masakifukunishi/nft-craft" },
    ],
  },
  {
    appName: "Crypto Chart",
    imagePath: "/projects/crypto-chart.png",
    description: {
      ja: `選択した暗号資産のペアと期間のローソク足チャートを確認できる、MERNスタックのWebアプリです。📈`,
      en: `A full-stack MERN web app that lets users view candlestick charts for selected cryptocurrency pairs and time periods. 📈`,
    },
    links: [{ service: "GitHub", href: "https://github.com/masakifukunishi/crypto-chart" }],
  },
  {
    appName: "PWA List",
    imagePath: "/projects/pwa-list.png",
    description: {
      ja: `開発者がPWAを投稿し、ユーザーがそれを見つけられるWebアプリです。 \n 300以上のPWAを投稿していただけました！`,
      en: `A web app that lets developers submit PWAs and users discover them. \n More than 300 PWAs have been submitted!`,
    },
    links: [{ service: "App", href: "https://www.pwalist.app", isStrikethrough: true }],
  },
];
