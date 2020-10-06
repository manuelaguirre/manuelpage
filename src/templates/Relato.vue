<template>
	<Layout>
		<h1>{{ $page.relato.title }}</h1>
    <article style="white-space: pre-wrap;">{{ $page.relato.body }}</article>
    <hr />
	</Layout>
</template>

<page-query>
query Relato ($id: ID!) {
  relato (id: $id) {
    name
    title
    body
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.relato.title + " - Nahuel Klahn"
      }
  },
  computed: {
    hasNextPage() {
      //TODO: pagination for relato
      return  
    },
    hasPreviousPage() {
      return
    }
  },
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
