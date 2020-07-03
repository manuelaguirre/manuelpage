<template>
  <div class="layout">
    <!-- Header -->
					<header id="header">
						

							<!-- Logo -->
								<g-link to="/" class="logo">
									<span class="symbol"><g-image src="~/assets/images/nk.svg" alt="" /></span>
								</g-link>

							<!-- Nav -->
								<nav>
									<ul>
										<li><g-link to="/opus">Opus</g-link></li>
                    <li><g-link to="/blog">Blog</g-link></li>
									</ul>
								</nav>

						
					</header>
    <slot/>
    <footer id="footer">
						<div class="inner">
							<section>
								<ul class="icons">
									<li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
								</ul>
							</section>
							<ul class="copyright">
								<li>&copy; Nahuel Klahn. Todos los derechos reservados</li><li>Design: <a href="http://html5up.net">Manuel Aguirre</a></li>
							</ul>
						</div>
					</footer>
  </div>
  
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
