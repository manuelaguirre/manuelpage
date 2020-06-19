<template>
  <Layout>
    <!-- wrapper -->
  <div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>Nahuel Klahn</h1>
							<span class="image main"><g-image src="~/assets/images/piccover.jpg" alt="Retrato en lápiz"/></span>
							<p>{{ $page.results.edges[0].summary.body }}</p>
						</div>
					</div>					
			</div>

  </Layout>
</template>

<page-query>
query{
	results:allSummary(limit:1){
    edges{
      summary:node{
        name
        body
      }
    }
  }
#     edges{
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
