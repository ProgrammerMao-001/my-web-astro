// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh"; // zh, en
export const SITE_AUTHOR = "毛三仙"; // zh, en
export const SITE_QQ = "3061148499";
export const SITE_QQ1 = "ACodeMan";
export const SITE_QQ_GROUP = "835193194";
export const SITE_EMAIL = "mhf.work@qq.com";
export const PAGE_SIZE = 6; // 分页数
export const SITE_INTRO = "一名专注于技术和细节的全栈开发者，致力于通过简洁高效的代码实现卓越的功能。"; // zh, en
export const SITE_TAB = "欢迎访问我的博客"; // Frosti
export const SITE_TITLE = "Welcome 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "YYYY-MM-DD";

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
    text: "navbar.home",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self"
  }, // Home page
  {
    id: "about",
    text: "navbar.about",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self"
  }, // About page
  {
    id: "blog",
    text: "navbar.blog",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "navbar.all_blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "navbar.tech_blogs",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "navbar.life_blogs",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "navbar.project",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "contact",
    text: "navbar.contact",
    href: "/contact",
    svg: "material-symbols:attach-email-outline-rounded",
    target: "_self",
  }, // 联系我
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://qm.qq.com/cgi-bin/qm/qr?k=v5DwACIOAdSzWoDfrwbUBLu6FcDpNJ7W&jump_from=webapi&authKey=PdRcutFys2A+ydVHkJBa47R670SWuMEx1PfSJi1ehpGb4vXEk/ie3iwxcHpjTy9w",
    ariaLabel: "QQ",
    title: "点击加入群聊",
    svg: "qq",
  },
  {
    // href: "/rss.xml",
    href: "/wechat",
    ariaLabel: "wechat",
    title: "暂未公开微信，可以先加我qq",
    target: "_self",
    svg: "wechat",
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
