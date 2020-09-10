export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5a68ada5b50d351a23c9c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bo93tnhw',
                  apiId: '902dd544-4e57-4c3f-a7a0-3da1976117ad'
                },
                {
                  buildHookId: '5f5a68ada5b50d37c523c8c2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-533ffibc',
                  apiId: '709e7f70-5ad8-4d71-b03f-7fbf86765b75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olets123/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-533ffibc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
