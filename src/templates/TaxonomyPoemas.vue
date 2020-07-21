<template>
	<Layout>
		<h1>{{ $page.taxonomyPoemas.name }}</h1>
    <ul>
      <li v-for="edge in $page.taxonomyPoemas.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
	</Layout>
</template>

<page-query>

query ($id: ID!) {
  taxonomyPoemas(id: $id) {
    name
    belongsTo(sortBy:"position") {
      edges {
        node {
          ... on Poem {
            id
            title
            path
            
          }
        }
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
