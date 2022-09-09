/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: { 
    domains: ['lh3.googleusercontent.com', 'i.imgur.com', 'imgs.search.brave.com', 's.gravatar.com', 'www.gravatar.com'],
  }

}
