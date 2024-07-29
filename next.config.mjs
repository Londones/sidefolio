/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
import pkg from "./next-i18next.config.js";
const { i18n } = pkg;

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "api.microlink.io"],
  },
  experimental: {
    mdxRs: true,
  },
  i18n,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
