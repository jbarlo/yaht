/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  distDir: "out",
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
