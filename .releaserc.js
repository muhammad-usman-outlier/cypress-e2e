module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
      },
    ],
  ],
  branches: ["main"],
};
