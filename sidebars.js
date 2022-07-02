/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const apiSidebar = require("./docs/api/sidebar.json")

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['get-started', 'build-envd/build-envd', 'ide/ide','concepts'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Language-specific Guides',
      items: [{
        type: 'doc',
        id: 'lang/python',
        label: 'Python',
      }, {
        type: 'doc',
        id: 'lang/r',
        label: 'R',
      }, {
        type: 'doc',
        id: 'lang/julia',
        label: 'Julia',
      }],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Tips and Tricks',
      items: ['tips/mirror', 'tips/config'],
      collapsed: false,
    },
    require("./docs/api/sidebar.json"),
    'cli',
    {
      type: 'category',
      label: 'Community',
      items: ['community/contributing', 'community/development', 'community/roadmap'],
      collapsed: false,
    },
    {
      type: 'link',
      label: '💬 Chat with us on Discord',
      href: 'https://discord.gg/KqswhpVgdU',
    },
  ],
};

module.exports = sidebars;
