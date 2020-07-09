<template>
	<Layout>
		<h1>Relatos</h1>
    <ul>
      <li v-for="edge in $page.results.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
	</Layout>
</template>

<page-query>
query Relato{
  results: allRelato{
    edges{
      node{
        name
        title
        body
        path
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