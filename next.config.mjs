import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
  }
};

export default withSentryConfig(nextConfig, {

org: "jsm-x9",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,


widenClientFileUpload: true,


hideSourceMaps: true,


disableLogger: true,


automaticVercelMonitors: true,
});