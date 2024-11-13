import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug', '727'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/config',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/config', '518'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/content',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/content', 'a17'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/globalData', 'e0b'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/metadata', 'e0b'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/registry',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/registry', '659'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/__docusaurus/debug/routes',
    component: ComponentCreator('/my-pipeline-tutorial-project/__docusaurus/debug/routes', '748'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog', 'c76'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/archive',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/archive', 'ad0'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/authors',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/authors', '775'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/authors/all-sebastien-lorber-articles', 'e45'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/authors/yangshun',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/authors/yangshun', 'aa0'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/first-blog-post',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/first-blog-post', 'a2a'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/long-blog-post',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/long-blog-post', '0b6'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/mdx-blog-post',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/mdx-blog-post', '5bd'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/tags',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/tags', '8a2'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/tags/docusaurus',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/tags/docusaurus', '125'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/tags/facebook',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/tags/facebook', '127'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/tags/hello',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/tags/hello', 'd6c'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/tags/hola',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/tags/hola', '30c'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/blog/welcome',
    component: ComponentCreator('/my-pipeline-tutorial-project/blog/welcome', '34f'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/markdown-page',
    component: ComponentCreator('/my-pipeline-tutorial-project/markdown-page', 'bad'),
    exact: true
  },
  {
    path: '/my-pipeline-tutorial-project/docs',
    component: ComponentCreator('/my-pipeline-tutorial-project/docs', '38f'),
    routes: [
      {
        path: '/my-pipeline-tutorial-project/docs',
        component: ComponentCreator('/my-pipeline-tutorial-project/docs', '805'),
        routes: [
          {
            path: '/my-pipeline-tutorial-project/docs',
            component: ComponentCreator('/my-pipeline-tutorial-project/docs', '6e6'),
            routes: [
              {
                path: '/my-pipeline-tutorial-project/docs/category/tutorial---basics',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/category/tutorial---basics', '959'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/category/tutorial---extras',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/category/tutorial---extras', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/intro',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/intro', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/congratulations', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-blog-post', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-document', '70d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/create-a-page', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/deploy-your-site', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-basics/markdown-features', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-extras/manage-docs-versions', 'e31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-pipeline-tutorial-project/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/my-pipeline-tutorial-project/docs/tutorial-extras/translate-your-site', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-pipeline-tutorial-project/',
    component: ComponentCreator('/my-pipeline-tutorial-project/', '6e5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
