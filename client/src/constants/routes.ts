export const PATHS = {
  dashboard: "/dashboard",
  aiAgent: "/ai-agent",
  airdrop: "/airdrop",
  referral: "/referral",
  earn: "/earn",
  portfolio: "/portfolio",
  settings: "/settings",
  help: "/help",

  landingPage: "/",
  next: "/_next",
  favicon: "/favicon.ico",
  robots: "/robots.txt",
};

export const PUBLIC_PATHS = [PATHS.landingPage, PATHS.next, PATHS.favicon, PATHS.robots];

export const PROTECTED_PATHS = [
  PATHS.dashboard,
  PATHS.aiAgent,
  PATHS.airdrop,
  PATHS.referral,
  PATHS.earn,
  PATHS.portfolio,
  PATHS.settings,
  PATHS.help,
];
