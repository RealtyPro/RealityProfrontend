// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    // allow external images from Google Cloud Storage and demo site images
    domains: ['storage.googleapis.com', 'demorealestate.webnapps.net'],
  },
  async rewrites()
   {
    return [
      {
        source: '/api/:path*',
        destination: 'https://demorealestate2.webnapps.net/api/:path*', // Proxy to Backend
      },
    ];
    
  }
};

module.exports = nextConfig;



// {
//   "functions": [
//     {
//       "source": "functions",
//       "codebase": "default",
//       "ignore": [
//         "node_modules",
//         ".git",
//         "firebase-debug.log",
//         "firebase-debug.*.log",
//         "*.local"
//       ],
//       "predeploy": [
//         "npm --prefix \"$RESOURCE_DIR\" run build"
//       ]
//     }
//   ],
//   "hosting": {
//     "public": "next",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ]
//   }
// }