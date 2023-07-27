import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '06a'),
    routes: [
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
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
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
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
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
