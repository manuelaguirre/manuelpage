<template>
  <Layout>
    <!-- wrapper -->
  <div id="wrapper">

				<!-- Menu -->
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="generic.html">Ipsum veroeros</a></li>
							<li><a href="generic.html">Tempus etiam</a></li>
							<li><a href="generic.html">Consequat dolor</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>Generic Page</h1>
							<span class="image main"><g-image src="~/assets/images/pic13.jpg" alt="" /></span>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
						<section v-for="edge in $page.results.edges" :key="edge.node.id">
									<h2>{{ edge.node.title }}</h2>
									<div class="poem" v-html="edge.node.body" style="white-space: pre-line">
									</div>									
								</section>
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
  results:allPoem{
    edges{
      node{
        name
        title
        body
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
