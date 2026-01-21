/** @type {import('next').NextConfig} */
const rawBasePath = (process.env.BASE_PATH || "").trim()
const normalizedBasePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "")
const basePath = normalizedBasePath ? (normalizedBasePath.startsWith("/") ? normalizedBasePath : `/${normalizedBasePath}`) : ""
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
