export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6144c4c30f59faaa36699652',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-new-studio-mg52aef5',
                  apiId: '2e731eb8-88f3-4830-84e3-53e4eaaf0c91'
                },
                {
                  buildHookId: '6144c4c3b3ceec4e2a8d1dae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-new-web-2szti7p6',
                  apiId: 'e4d71d44-3530-4143-a03e-5ff7f5b65ae2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alastair38/sanity-nextjs-landing-pages-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-new-web-2szti7p6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
