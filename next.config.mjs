/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ""
const assetPrefix = basePath || undefined

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
