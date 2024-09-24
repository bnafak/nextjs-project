/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['computermania-bd.b-cdn.net'],
        remotePatterns: [
              {
                protocol: 'https',
                hostname: '**',
                // hostname: 'example.com',
                // port: '',
                // pathname: '/account123/**',
              },
            ],
      
      },
    }

module.exports=nextConfig;
