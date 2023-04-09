import type { Avatar, IconBadge } from "./components";

export interface PortfolioPage<T> {
  title: string;
  navbar: string;
  content: T;
}

export interface PortfolioSidebarContact {
  icon: string;
  link: string;
  text: string;
}

export interface PortfolioSidebar {
  avatar: Avatar;
  name: string;
  description: string;
  contacts: PortfolioSidebarContact[];
}

export type PortfolioIndex = string;

export interface PortfolioSkills {
  title: string;
  content: IconBadge[];
}

export interface PortfolioCareer {
  title: string;
  description: string;
  content: string;
}

export interface PortfolioLearn {}

export interface Portfolio {
  primaryColor: string;
  sidebar: PortfolioSidebar;
  index: PortfolioPage<PortfolioIndex>;
  skills: PortfolioPage<PortfolioSkills[]>;
  career: PortfolioPage<PortfolioCareer[]>;
  learn: PortfolioPage<PortfolioLearn>;
}
