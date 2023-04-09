export interface Avatar {
  src: string;
  alt: string;
}

export interface IconBadge {
  icon: string;
  type?: BadgeType;
}

export enum BadgeType {
  WIP = "wip",
  SOON = "soon",
}
