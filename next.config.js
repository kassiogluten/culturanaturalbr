module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://culturanaturalbr.menudino.com",
      },
    ];
  },
};
