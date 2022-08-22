module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "zip -qq -r logseq-nord-theme-${nextRelease.version}.zip icon.svg *.css *.jpg README.md LICENSE package.json",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "logseq-nord-theme-*.zip",
      },
    ],
  ],
};