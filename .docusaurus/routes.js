import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/${projectName}/blog',
    component: ComponentCreator('/${projectName}/blog', '26c'),
    exact: true
  },
  {
    path: '/${projectName}/blog/archive',
    component: ComponentCreator('/${projectName}/blog/archive', '12c'),
    exact: true
  },
  {
    path: '/${projectName}/blog/first-blog-post',
    component: ComponentCreator('/${projectName}/blog/first-blog-post', '2ba'),
    exact: true
  },
  {
    path: '/${projectName}/blog/long-blog-post',
    component: ComponentCreator('/${projectName}/blog/long-blog-post', '6c8'),
    exact: true
  },
  {
    path: '/${projectName}/blog/mdx-blog-post',
    component: ComponentCreator('/${projectName}/blog/mdx-blog-post', '52f'),
    exact: true
  },
  {
    path: '/${projectName}/blog/tags',
    component: ComponentCreator('/${projectName}/blog/tags', 'a2e'),
    exact: true
  },
  {
    path: '/${projectName}/blog/tags/docusaurus',
    component: ComponentCreator('/${projectName}/blog/tags/docusaurus', '0bf'),
    exact: true
  },
  {
    path: '/${projectName}/blog/tags/facebook',
    component: ComponentCreator('/${projectName}/blog/tags/facebook', '356'),
    exact: true
  },
  {
    path: '/${projectName}/blog/tags/hello',
    component: ComponentCreator('/${projectName}/blog/tags/hello', '025'),
    exact: true
  },
  {
    path: '/${projectName}/blog/tags/hola',
    component: ComponentCreator('/${projectName}/blog/tags/hola', '3b9'),
    exact: true
  },
  {
    path: '/${projectName}/blog/welcome',
    component: ComponentCreator('/${projectName}/blog/welcome', 'b9c'),
    exact: true
  },
  {
    path: '/${projectName}/markdown-page',
    component: ComponentCreator('/${projectName}/markdown-page', '6fc'),
    exact: true
  },
  {
    path: '/${projectName}/docs',
    component: ComponentCreator('/${projectName}/docs', '8c1'),
    routes: [
      {
        path: '/${projectName}/docs/category/1-početak',
        component: ComponentCreator('/${projectName}/docs/category/1-početak', 'ce0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/category/3-priručnik-za-korisnike',
        component: ComponentCreator('/${projectName}/docs/category/3-priručnik-za-korisnike', '069'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/category/4-izvedba-projekta',
        component: ComponentCreator('/${projectName}/docs/category/4-izvedba-projekta', '14e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/category/tutorial---basics',
        component: ComponentCreator('/${projectName}/docs/category/tutorial---basics', '2ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/category/tutorial---extras',
        component: ComponentCreator('/${projectName}/docs/category/tutorial---extras', '7e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/intro',
        component: ComponentCreator('/${projectName}/docs/intro', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/izvedba-projekta/arhitektura',
        component: ComponentCreator('/${projectName}/docs/izvedba-projekta/arhitektura', 'a22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/izvedba-projekta/koristeni-alati',
        component: ComponentCreator('/${projectName}/docs/izvedba-projekta/koristeni-alati', '6e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/pocetak/o-aplikaciji',
        component: ComponentCreator('/${projectName}/docs/pocetak/o-aplikaciji', '719'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/pocetak/uloge-korisnika',
        component: ComponentCreator('/${projectName}/docs/pocetak/uloge-korisnika', '712'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/potrebne-specifikacije',
        component: ComponentCreator('/${projectName}/docs/potrebne-specifikacije', 'ba7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/prirucnik-za-korisnike/poruka-dobrodoslice',
        component: ComponentCreator('/${projectName}/docs/prirucnik-za-korisnike/poruka-dobrodoslice', '399'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/congratulations', '6f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/create-a-blog-post', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/create-a-document', 'c7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/create-a-page', 'be4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/deploy-your-site', '357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/${projectName}/docs/tutorial-basics/markdown-features', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/${projectName}/docs/tutorial-extras/manage-docs-versions', 'ffb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/${projectName}/docs/tutorial-extras/translate-your-site', 'dca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/${projectName}/docs/zakljucak',
        component: ComponentCreator('/${projectName}/docs/zakljucak', 'fa2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/${projectName}/',
    component: ComponentCreator('/${projectName}/', 'ce7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
