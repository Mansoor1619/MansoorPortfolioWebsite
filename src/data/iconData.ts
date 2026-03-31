export interface IconData {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
  hoverColor: string;
}

export const iconsData: IconData[] = [
  {
    id: "github",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    url: "https://github.com/",
    color: "#ffffff",
    hoverColor: "#2dd4bf"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    url: "https://linkedin.com/in/",
    color: "#ffffff",
    hoverColor: "#0A66C2"
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
    url: "https://twitter.com/",
    color: "#ffffff",
    hoverColor: "#1DA1F2"
  },
  {
    id: "artstation",
    name: "ArtStation",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/artstation.svg",
    url: "https://artstation.com/",
    color: "#ffffff",
    hoverColor: "#13AFF0"
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
    url: "https://youtube.com/",
    color: "#ffffff",
    hoverColor: "#FF0000"
  }
];

export const getIconUrl = (platform: string): string => {
  const icon = iconsData.find(i => i.id === platform);
  return icon ? icon.icon : "";
};