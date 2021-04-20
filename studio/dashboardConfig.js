export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '607edadf57d53141ab21156c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-epu4wrfm',
                  apiId: 'cd183508-912a-46fb-963d-86578d0e0257'
                },
                {
                  buildHookId: '607edadf4234f951672ebf49',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-esr1a17z',
                  apiId: 'b56f8f33-2f7a-4ed3-b927-e25d3d4d7e5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oleksiisolianik/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-esr1a17z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
