export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: "live" | "beta" | "soon";
  color: "blue" | "purple" | "cyan" | "pink" | "green" | "yellow";
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  avatar: string;
  status: "active" | "idle" | "running";
  color: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Tool {
  id: string;
  icon: string;
  name: string;
  description: string;
  demos: string[];
  color: "blue" | "purple" | "cyan";
}
