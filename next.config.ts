// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'standalone',
  images: {
    // allow external images from Google Cloud Storage
    domains: ['storage.googleapis.com'],
  },
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