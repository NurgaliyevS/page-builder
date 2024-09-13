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
      "site builder, startup how to start, best website builder for portfolio, personal website builder, cheap websites for small business",
    description:
      "SubPage helps you create landing pages, build MVPs, and grow your audience fast. No coding skills required. Capture emails, validate ideas, and boost your online presence with our easy-to-use tools.",
    themeColor: "#ffffff",
    applicationName: "SubPage",
    og: {
      title: "SubPage - Yummy Meals, Strong Baby!",
      url: "https://subpage.io",
      image: "https://subpage.io/company_related/og_image.webp",
      imageAlt:
        "SubPage - helps you create landing pages, build MVPs, and grow your audience fast. No coding skills required. Capture emails, validate ideas, and boost your online presence with our easy-to-use tools.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://subpage.io/company_related/og_image.webp",
    },
  },
  blog: {
    title: "SubPage Blog",
    description:
      "Learn about building landing pages, creating MVPs, growing your audience, and leveraging digital marketing strategies for your startup or personal brand.",
    canonical: "https://subpage.io/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I'm a software engineer passionate about helping entrepreneurs and creators build their online products. SubPage is my solution to make website creation and audience growth accessible to everyone, regardless of technical skills.",
    },
  },
};
