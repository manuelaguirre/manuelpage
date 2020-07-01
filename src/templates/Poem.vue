<template>
	<Layout>
		<h1>{{ $page.poem.title }}</h1>
    <article style="white-space: pre-wrap;">{{ $page.poem.body}}</article>
    <hr />
	</Layout>
</template>

<page-query>

query Poem ($id: ID!) {
  poem (id: $id) {
    title
    taxonomy{
      name
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
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
