import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  // example as subpage.io without https://
  domainName: "subpage.io",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `SubPage <noreply@mg.subpage.io>`,
    fromAdmin: `SubPage <admin@mg.subpage.io>`,
    supportEmail: "support@subpage.io",
    forwardRepliesTo: "nurgasab@gmail.com",
  },
  documentTitle: "Page Builder - SubPage",
  domainWithHttps: "https://subpage.io",
  seo: {
    keywords:
      "first trimester recipes, 7 day meal plan for pregnant woman, pregnancy dinner recipes first trimester, dinner ideas for first trimester, meal plans for pregnant moms",
    description:
      "Yummy Meals, Strong Baby! Get personalized daily, weekly, and monthly meal plans for a healthy pregnancy. Eat smart and grow a happy baby with our easy-to-use food guide.",
    themeColor: "#ffffff",
    applicationName: "SubPage",
    og: {
      title: "SubPage - Yummy Meals, Strong Baby!",
      url: "https://subpage.io",
      image: "https://subpage.io/company_related/og-image.webp",
      imageAlt:
        "SubPage - Yummy Meals, Strong Baby! Get personalized daily, weekly, and monthly meal plans for a healthy pregnancy. Eat smart and grow a happy baby with our easy-to-use food guide.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://subpage.io/company_related/og-image.webp",
    },
  },
  blog: {
    title: "SubPage Blog",
    description:
      "Foods to avoid during pregnancy, first trimester recipes, 7 day meal plan for pregnant woman, pregnancy food aversions, pregnancy dinner recipes first trimester, dinner ideas for first trimester, meal plans for pregnant moms",
    canonical: "https://subpage.io/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a software engineer and the husband of a pregnant woman. I wanted to create a platform that helps pregnant women because I know how hard it is to find the right information. My wife is pregnant, and I want to make sure she is eating the right food. I am building SubPage to help moms eat healthy and grow a happy baby.",
    },
  },
};
