type Item = {
  id: string;
  keyword: string;
  intents: Array<
    "Informational" | "Navigational" | "Commercial" | "Transactional"
  >;
  volume: number;
  cpc: number;
  traffic: number;
  link: string;
};

export const CustomItems: Item[] = [
  {
    id: "1",
    keyword: "react components",
    intents: ["Informational", "Navigational"],
    volume: 2507,
    cpc: 2.5,
    traffic: 88,
    link: "https://originui.com",
  },
  {
    id: "2",
    keyword: "buy react templates",
    intents: ["Commercial", "Transactional"],
    volume: 1850,
    cpc: 4.75,
    traffic: 65,
    link: "https://originui.com/input",
  },
  {
    id: "3",
    keyword: "react ui library",
    intents: ["Informational", "Commercial"],
    volume: 3200,
    cpc: 3.25,
    traffic: 112,
    link: "https://originui.com/badge",
  },
  {
    id: "4",
    keyword: "tailwind components download",
    intents: ["Transactional"],
    volume: 890,
    cpc: 1.95,
    traffic: 45,
    link: "https://originui.com/alert",
  },
  {
    id: "5",
    keyword: "react dashboard template free",
    intents: ["Commercial", "Transactional"],
    volume: 4100,
    cpc: 5.5,
    traffic: 156,
    link: "https://originui.com/tabs",
  },
  {
    id: "6",
    keyword: "how to use react components",
    intents: ["Informational"],
    volume: 1200,
    cpc: 1.25,
    traffic: 42,
    link: "https://originui.com/table",
  },
  {
    id: "7",
    keyword: "react ui kit premium",
    intents: ["Commercial", "Transactional"],
    volume: 760,
    cpc: 6.8,
    traffic: 28,
    link: "https://originui.com/avatar",
  },
  {
    id: "8",
    keyword: "react component documentation",
    intents: ["Informational", "Navigational"],
    volume: 950,
    cpc: 1.8,
    traffic: 35,
    link: "https://originui.com",
  },
  {
    id: "9",
    keyword: "test",
    intents: ["Informational", "Navigational"],
    volume: 950,
    cpc: 1.8,
    traffic: 35,
    link: "https://originui.com",
  },
];
