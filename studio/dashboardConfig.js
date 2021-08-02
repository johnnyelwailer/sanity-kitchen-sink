export default {
  widgets: [
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
                  buildHookId: '6107c71dfa1df8e4ce8a7de1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r5fi63kj',
                  apiId: 'c00b7b9b-eb42-4a80-b691-10cb610fefac'
                },
                {
                  buildHookId: '6107c71dade53d7c203d6af2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a1494cub',
                  apiId: 'da06ff0a-d01a-455d-bacc-9298fd0b1566'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnnyelwailer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a1494cub.netlify.app', category: 'apps'}
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
