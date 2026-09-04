import type { NewsItem } from "../Types/news";

import newsPipelineImage from "../assets/news/news-1.png";
import newsPartnershipImage from "../assets/news/news-2.png";
import newsHseImage from "../assets/news/news-3.png";

export const newsData: NewsItem[] = [
  {
    _id: "pipeline-project-completed",

    category: "Projects",

    title:
      "LSA Completes Major Pipeline Project Ahead of Schedule",

    shortDescription:
      "The project was executed with the highest standards of safety, quality, and operational efficiency.",

    content:
      "LSA successfully completed a major pipeline project ahead of the planned schedule. The work was delivered while maintaining strict safety, quality, and operational standards throughout every phase of execution.",

    publishedAt: "2026-08-24",

    image: {
      url: newsPipelineImage,
      alt: "LSA engineering team working at an industrial pipeline facility",
    },

    isFeatured: true,

    displayOrder: 1,
  },

  {
    _id: "strategic-partnership-announcement",

    category: "Company",

    title:
      "LSA Announces Strategic Partnership with Global Industry Leader",

    shortDescription:
      "A new strategic partnership strengthens LSA's capabilities and supports future growth across key markets.",

    content:
      "LSA has announced a strategic partnership designed to strengthen technical capabilities, expand collaboration opportunities, and support the company's continued growth across regional markets.",

    publishedAt: "2026-08-18",

    image: {
      url: newsPartnershipImage,
      alt: "Construction project representing LSA's new strategic partnership",
    },

    isFeatured: false,

    displayOrder: 2,
  },

  {
    _id: "successful-hse-training",

    category: "HSE",

    title:
      "LSA Conducts Successful HSE Training Program",

    shortDescription:
      "The training program reinforced LSA's commitment to safe operations and continuous professional development.",

    content:
      "LSA successfully conducted an HSE training program focused on strengthening workplace safety awareness, operational readiness, and best practices across project teams.",

    publishedAt: "2026-08-12",

    image: {
      url: newsHseImage,
      alt: "LSA employees participating in an HSE training activity",
    },

    isFeatured: false,

    displayOrder: 3,
  },

  {
    _id: "engineering-milestone",

    category: "Engineering",

    title:
      "LSA Reaches New Engineering Delivery Milestone",

    shortDescription:
      "The latest milestone reflects continued progress in delivering complex engineering solutions efficiently.",

    content:
      "LSA has achieved another engineering delivery milestone as part of its continued focus on reliable execution, technical excellence, and efficient project delivery.",

    publishedAt: "2026-08-06",

    image: {
      url: newsPipelineImage,
      alt: "Engineering facility associated with LSA project delivery",
    },

    isFeatured: false,

    displayOrder: 4,
  },

  {
    _id: "project-safety-recognition",

    category: "HSE",

    title:
      "LSA Project Team Recognized for Outstanding Safety Performance",

    shortDescription:
      "The recognition highlights the team's consistent commitment to safety and operational discipline.",

    content:
      "An LSA project team has been recognized for outstanding safety performance after achieving strong results across key HSE indicators and maintaining disciplined operational practices.",

    publishedAt: "2026-07-29",

    image: {
      url: newsHseImage,
      alt: "LSA project team recognized for safety performance",
    },

    isFeatured: false,

    displayOrder: 5,
  },

  {
    _id: "regional-project-update",

    category: "Projects",

    title:
      "LSA Continues Progress Across Major Regional Projects",

    shortDescription:
      "Several ongoing projects continue to advance according to planned engineering and construction milestones.",

    content:
      "LSA continues to make steady progress across several major regional projects, with engineering, construction, and project management teams working toward upcoming delivery milestones.",

    publishedAt: "2026-07-21",

    image: {
      url: newsPartnershipImage,
      alt: "Regional construction project currently being delivered by LSA",
    },

    isFeatured: false,

    displayOrder: 6,
  },
];