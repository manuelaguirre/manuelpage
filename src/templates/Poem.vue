<template>
	<Layout>
		<h1>{{ $page.poem.title }}</h1>
    <article style="white-space: pre-wrap;">{{ $page.poem.body }}</article>
    <hr />
    <div class="pager">
      <g-link v-show="previousPage" :to="$page.poem.taxonomy[0].belongsTo.edges[1].previous.path">Anterior</g-link>
      <g-link :to="$page.poem.taxonomy[0].path">Índice</g-link>
      <g-link v-show="nextPage" class="next-link" :to="$page.poem.taxonomy[0].belongsTo.edges[0].next.path">Siguiente</g-link>
    </div>
	</Layout>
</template>

<page-query>

query Poem ($id: ID!) {
  poem (id: $id) {
    title
    taxonomy{
      name
      path
      belongsTo(sortBy:"position"){
        edges{
          next{
            ... on Poem{
              path
            }
          }
        	previous{
            ... on Poem{
              path
            }
          }
        }
      }
    }
    body
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.poem.title + " - Nahuel Klahn"
      }
  },
  computed: {
    nextPage() {
      return (this.$page.poem.taxonomy[0].belongsTo.edges[0] ? this.$route.path === this.$page.poem.taxonomy[0].belongsTo.edges[0].next.path 
      : false) 
    },
    previousPage() {
      return (this.$page.poem.taxonomy[0].belongsTo.edges[1] ? this.$route.path === this.$page.poem.taxonomy[0].belongsTo.edges[1].previous.path
      : false)
    }
  },
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
