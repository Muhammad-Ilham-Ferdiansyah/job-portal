/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: `${process.env.NEXT_IMAGE_LINK}`,
        },
      ],
    },
  };
  
  export default nextConfig;
  