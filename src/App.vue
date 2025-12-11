<script>
//import Navbar from "@/components/Navbar.vue";

export default { name : "App" };
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Loves Watch Movies</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Profil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/search">Search Movies</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </header>

  <main>
    <router-view/>
  </main>

  <footer>

  </footer>

</template>

<style scoped>
.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}
</style>
