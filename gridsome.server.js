// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({addCollection}) => {
    const poems = addCollection('Poem')
    const taxonomies = addCollection('TaxonomyPoemas')
  
    // makes all ids in the `taxonomies` field reference a `Tag`
    poems.addReference('taxonomy', 'TaxonomyPoemas')
  
    taxonomies.addNode({
      id: '1',
      title: 'Blanco'
    })
  
    poems.addNode({
      id: '1',
      title: 'A post',
      taxonomies: ['1']
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
