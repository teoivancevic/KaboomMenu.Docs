import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '586'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a7a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '590'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd55'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '332'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '710'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '00d'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '23f'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '5e1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '9fc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '01c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a09'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '501'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '805'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '957'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '485'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5e8'),
    routes: [
      {
        path: '/docs/category/0-docusaurus-tutorial',
        component: ComponentCreator('/docs/category/0-docusaurus-tutorial', 'c4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/1-početak',
        component: ComponentCreator('/docs/category/1-početak', '59d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/3-priručnik-za-korisnike',
        component: ComponentCreator('/docs/category/3-priručnik-za-korisnike', '366'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/4-izvedba-projekta',
        component: ComponentCreator('/docs/category/4-izvedba-projekta', 'de1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/intro',
        component: ComponentCreator('/docs/docusaurus-tutorial/intro', '889'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/congratulations', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-document', '7de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-page', 'e87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/deploy-your-site', 'a66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/markdown-features', 'e63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-extras/manage-docs-versions', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-extras/translate-your-site', '7b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/izvedba-projekta/arhitektura',
        component: ComponentCreator('/docs/izvedba-projekta/arhitektura', 'a02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/izvedba-projekta/koristeni-alati',
        component: ComponentCreator('/docs/izvedba-projekta/koristeni-alati', '790'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pocetak/o-aplikaciji',
        component: ComponentCreator('/docs/pocetak/o-aplikaciji', '8a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pocetak/uloge-korisnika',
        component: ComponentCreator('/docs/pocetak/uloge-korisnika', 'af7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/potrebne-specifikacije',
        component: ComponentCreator('/docs/potrebne-specifikacije', '405'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/prirucnik-za-korisnike/poruka-dobrodoslice',
        component: ComponentCreator('/docs/prirucnik-za-korisnike/poruka-dobrodoslice', 'd5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/zakljucak',
        component: ComponentCreator('/docs/zakljucak', 'f18'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0cf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
