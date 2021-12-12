module.exports = {
  plugins: [
    "@semantic-release/github",
    ["@semantic-release/npm", {
      npmPublish: false
    }],
    ["@semantic-release/git", {
      "assets": ["package.json"],
      "message": "chore(release): ${nextRelease.version}"
    }]
  ],
  branches: ['main'],
  preset: 'angular'
}