export const PATHS = {
  dashboard: "/dashboard",
  aiAgent: "/ai-agent",
  portfolio: "/portfolio",
  trending: "/trending",
  defiAgent: "/defi-agent",
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
  PATHS.portfolio,
  PATHS.trending,
  PATHS.defiAgent,
  PATHS.settings,
  PATHS.help,
];
