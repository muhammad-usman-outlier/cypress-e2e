module.exports = {
  plugins: [
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
  ],
  branches: ["main"],
};
