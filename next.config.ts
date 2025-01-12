/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/**",
      },
    ],
  },
};

module.exports = nextConfig;
