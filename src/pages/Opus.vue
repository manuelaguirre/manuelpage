<template>
  <Layout>
    <div id="wrapper">
      <div id="main">
      <div class="inner">     
          <h1>Opus</h1>
          <h2>Poemarios</h2>
            <section class="tiles">
              <article class="style7">
                <span class="image">
                  <g-image src="~/assets/images/picblack.jpg" alt="" />
                </span>
                <a href="/poemas/blanco">
                  <h2>Blanco</h2>
                  <div class="content">
                    <p>Dulce, frío y lechoso</p>
                  </div>
                </a>
              </article>
              <article class="style8">
                <span class="image">
                  <g-image src="~/assets/images/picfog.jpg" alt="" />
                </span>
                <a href="poemas/negro">
                  <h2>Negro</h2>
                  <div class="content">
                    <p>Ónix de mis meditaciones</p>
                  </div>
                </a>
              </article>
            </section>
            <h2>Relatos</h2>
            <section class="tiles">
              <article class="style6">
                <span class="image">
                  <g-image src="~/assets/images/picescalera.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Camino</h2>
                  <div class="content">
                    <p>Polvo en las chancletas</p>
                  </div>
                </a>
              </article>
              <article class="style3">
                <span class="image">
                  <g-image src="~/assets/images/picmonoblock.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Constitución</h2>
                  <div class="content">
                    <p>La ciudad viva</p>
                  </div>
                </a>
              </article>
            </section>         
      </div>
    </div>
    </div></Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Opus'
  }
}
</script>
