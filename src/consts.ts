// ---------------- ↓ 网站信息 ↓ ----------------
export const SITE_LANG = "zh"; // zh, en
export const SITE_AUTHOR = "毛杭飞";
export const SITE_QQ = "3061148499";
export const SITE_QQ1 = "ACodeMan";
export const SITE_QQ_GROUP = "835193194";
export const SITE_EMAIL = "mhf.work@qq.com";
export const SITE_NAME = "毛杭飞的博客";
export const SITE_INTRO = "一名专注于技术和细节的全栈开发者，致力于通过简洁高效的代码实现卓越的功能。"; // zh, en
export const SITE_TAB = "欢迎访问我的博客"; // Frosti
export const SITE_TITLE = "Welcome 🧊";
export const SITE_KEYWORDS = "毛杭飞 博客 全栈开发 前端 后端 全栈 博客 个人博客 个人网站";
export const SITE_DESCRIPTION = "欢迎探索我的专业领域，我是一名资深的全栈开发者，专注于为客户提供量身定制的系统解决方案。凭借深厚的技术功底和对细节的执着追求，我能够确保您的项目以最高效、最可靠的代码实现，满足您的业务需求。如果您正在寻找一个能够交付卓越成果的技术合作伙伴，请联系我，让我有机会用专业的技术为您的成功助力。";
export const PAGE_SIZE = 6; // 分页数
export const DATE_FORMAT = "YYYY-MM-DD";

// ---------------- ↑ 网站信息 ↑ ----------------

// ---------------- ↓ 用户信息 ↓ ----------------
export const USER_NAME = "MaoHangFei";
export const USER_SITE = "" // http://maohangfei.cn todo 等域名审核通过后打开
export const USER_AVATAR = "/profile.webp";

// ---------------- ↑ 用户信息 ↑ ----------------

// ---------------- ↓ 后台服务 ↓ ----------------
export const SERVER_URL = "https://demo.saroprock.com"; // todo 本地服务器地址【评论用】
// ---------------- ↑ 后台服务 ↑ ----------------

// ---------------- ↓ 主题配置 ↓ ----------------
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}
// ---------------- ↑ 主题配置 ↑ ----------------

// ---------------- ↓ 菜单和图标 ↓ ----------------
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
    id: "work-experience",
    text: "navbar.work-experience",
    href: "/workExperience",
    svg: "material-symbols:work-outline",
    target: "_self"
  }, // About page -》 工作经历
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
        svg: "material-symbols:box-outline-sharp",
        target: "_self",
      }, // All blog 全部博客 -》 全部项目
      {
        id: "tech",
        text: "navbar.tech_blogs",
        href: "/blog/categories/公司项目",
        svg: "material-symbols:approval-delegation-outline-sharp",
        target: "_self",
      }, // Technology category 技术博客 -》 公司项目
      {
        id: "life",
        text: "navbar.life_blogs",
        href: "/blog/categories/私活项目",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category 生活博客 -》 私活项目
    ],
  }, // Blog page with sub-items 博客 -》 项目
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
  {
    id: "contact",
    text: "navbar.online-resume",
    href: "/onlineResume",
    svg: "material-symbols:prescriptions-outline-sharp",
    target: "_self",
  }, // 在线简历
];

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
// ---------------- ↑ 菜单和图标 ↑ ----------------
