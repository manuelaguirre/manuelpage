<template>
  <Layout>
    <!-- wrapper -->
  <div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>Nahuel Klahn</h1>
							<span class="image main"><g-image src="~/assets/images/piccover.jpg" alt="" /></span>
							<p>{{ $page.results.edges[0].summary.body }}</p>
						</div>
						<section class="tiles">
							<article class="style1">
								<span class="image">
									<g-image src="~/assets/images/pic01.jpg" alt="" />
								</span>
								<a href="generic.html">
									<h2>Magna</h2>
									<div class="content">
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et
											feugiat.</p>
									</div>
								</a>
							</article>
							<article class="style2">
								<span class="image">
									<g-image src="~/assets/images/pic02.jpg" alt="" />
								</span>
								<a href="generic.html">
									<h2>Lorem</h2>
									<div class="content">
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et
											feugiat.</p>
									</div>
								</a>
							</article>
						</section>
						
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
