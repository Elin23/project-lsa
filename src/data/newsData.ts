import type { NewsItem } from "../Types/news";

import newsPipelineImage from "../assets/news/news-1.png";
import newsPartnershipImage from "../assets/news/news-2.png";
import newsHseImage from "../assets/news/news-3.png";

export const newsData: NewsItem[] = [
  {
    id: "pipeline-project-completed",
    category: "Projects",
    title: "LSA Completes Major Pipeline Project Ahead of Schedule",
    summary:
      "The project was executed with the highest standards of safety, quality, and operational efficiency.",
    content:
      "LSA successfully completed a major pipeline project ahead of the planned schedule. The work was delivered while maintaining strict safety, quality, and operational standards throughout every phase of execution.",
    publishedAt: "2026-08-24",
    images: [
      {
        url: newsPipelineImage,
        alt: "LSA engineering team working at an industrial pipeline facility",
      },
      {
        url: newsPartnershipImage,
        alt: "Industrial construction site related to the completed LSA project",
      },
      {
        url: newsHseImage,
        alt: "LSA team reviewing project operations and safety procedures",
      },
    ],
  },
  {
    id: "strategic-partnership-announcement",
    category: "Company",
    title: "LSA Announces Strategic Partnership with Global Industry Leader",
    summary:
      "A new strategic partnership strengthens LSA's capabilities and supports future growth across key markets.",
    content:
      "LSA has announced a strategic partnership designed to strengthen technical capabilities, expand collaboration opportunities, and support the company's continued growth across regional markets.",
    publishedAt: "2026-08-18",
    images: [
      {
        url: newsPartnershipImage,
        alt: "Construction project representing LSA's new strategic partnership",
      },
    ],
  },
  {
    id: "successful-hse-training",
    category: "HSE",
    title: "LSA Conducts Successful HSE Training Program",
    summary:
      "The training program reinforced LSA's commitment to safe operations and continuous professional development.",
    content:
      "LSA successfully conducted an HSE training program focused on strengthening workplace safety awareness, operational readiness, and best practices across project teams.",
    publishedAt: "2026-08-12",
    images: [
      {
        url: newsHseImage,
        alt: "LSA employees participating in an HSE training activity",
      },
      {
        url: newsPipelineImage,
        alt: "Industrial environment used during LSA safety training",
      },
    ],
  },
  {
    id: "engineering-milestone",
    category: "Engineering",
    title: "LSA Reaches New Engineering Delivery Milestone",
    summary:
      "The latest milestone reflects continued progress in delivering complex engineering solutions efficiently.",
    content:
      "LSA has achieved another engineering delivery milestone as part of its continued focus on reliable execution, technical excellence, and efficient project delivery.",
    publishedAt: "2026-08-06",
    images: [
      {
        url: newsPipelineImage,
        alt: "Engineering facility associated with LSA project delivery",
      },
    ],
  },
  {
    id: "project-safety-recognition",
    category: "HSE",
    title: "LSA Project Team Recognized for Outstanding Safety Performance",
    summary:
      "The recognition highlights the team's consistent commitment to safety and operational discipline.",
    content:
      "An LSA project team has been recognized for outstanding safety performance after achieving strong results across key HSE indicators and maintaining disciplined operational practices.",
    publishedAt: "2026-07-29",
    images: [
      {
        url: newsHseImage,
        alt: "LSA project team recognized for safety performance",
      },
    ],
  },
  {
    id: "regional-project-update",
    category: "Projects",
    title: "LSA Continues Progress Across Major Regional Projects",
    summary:
      "Several ongoing projects continue to advance according to planned engineering and construction milestones.",
    content:
      "LSA continues to make steady progress across several major regional projects, with engineering, construction, and project management teams working toward upcoming delivery milestones.",
    publishedAt: "2026-07-21",
    images: [
      {
        url: newsPartnershipImage,
        alt: "Regional construction project currently being delivered by LSA",
      },
      {
        url: newsPipelineImage,
        alt: "Industrial infrastructure associated with an ongoing LSA project",
      },
    ],
  },
];