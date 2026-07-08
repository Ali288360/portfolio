import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {

  images: {
    unoptimized: isProd ? true : false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nullplex.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**'
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "nirzak-streak-stats.vercel.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
