<template>
	<Layout>
    <h1>Cumpleaños</h1>
    <p>Buenos amigos con buenas intenciones escriben buenos textos.</p>
		<ul v-for="edge in $page.results.edges" :key="edge.regalo.id">
      <h2>{{ edge.regalo.title }}</h2>
          <article style="white-space: pre-wrap;">{{ edge.regalo.body}}</article>
          <h4>{{ edge.regalo.author }}</h4>
          <hr>
    </ul>
	</Layout>
</template>

<page-query>

query Cumpleanitos{
	results: allAnniversaire{
    edges{
      regalo: node{
        id
        title
        body
        author
      }
    }
  }
}



</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Cumpleaños - Nahuel Klahn"
      }
  }
}

</script>

<style>
h4 {
    text-align: right;
    margin-top: 2em;
}
</style>
