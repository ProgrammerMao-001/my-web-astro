// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "en"; // zh-CN, en, ja, ko, ru, zh-TW
export const SITE_TAB = "欢迎访问我的博客"; // Frosti
export const SITE_TITLE = "Frosti 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "EveSunMaple";
export const USER_SITE = "https://frosti.saroprock.com"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
// 图标库参考：https://icon-sets.iconify.design/material-symbols/?icon-filter=home
export const menuItems = [
  {
    id: "home",
    text: "Home",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self"
  }, // Home page
  {
    id: "about",
    text: "About",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self"
  }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:mhf.work@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "点击加我微信",
    svg: "wechat",
  },
  {
    href: "https://qm.qq.com/cgi-bin/qm/qr?k=v5DwACIOAdSzWoDfrwbUBLu6FcDpNJ7W&jump_from=webapi&authKey=PdRcutFys2A+ydVHkJBa47R670SWuMEx1PfSJi1ehpGb4vXEk/ie3iwxcHpjTy9w",
    ariaLabel: "QQ",
    title: "点击加入群聊",
    svg: "qq",
  },
  {
    href: "https://github.com/ProgrammerMao-001",
    ariaLabel: "Github",
    title: "我的github主页",
    svg: "github",
  },
  {
    href: "https://blog.csdn.net/m0_74149462?type=blog",
    ariaLabel: "CSDN",
    title: "我的csdn主页",
    svg: "csdn",
  },
];
