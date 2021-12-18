/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/222324/b1ad38',
        permanent: true,
      },
    ];
  },
};
