/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "mate-imgs.s3.me-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
