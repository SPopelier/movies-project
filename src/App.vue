<script>
//import Navbar from "@/components/Navbar.vue";

export default { name : "App" };
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg purple">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Loves Watch Movies</a>
        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <button class="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </header>

  <main class="bg-dark text-light">
    <router-view/>
  </main>

  <footer class="purple d-flex flex-wrap justify-content-between align-item-center border-top p-2">
    <p class="col-md-4 text-body-secondary purple">© 2025 Loves Watch Movies, Inc</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none" aria-label="#bootstrap">
      <svg class="bi" width="40" height="32" aria-hidden="true">
        <use xlink:href="#boostrap"></use>
      </svg>
    </a>
    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item">
        <a href="/" class="px-2 purple">Home</a>
      </li>
      <li class="nav-item">
        <a href="/" class="px-2 purple">Profil</a>
      </li>
      <li class="nav-item">
        <a href="/" class="px-2 purple">Search Movies</a>
      </li>
    </ul>
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

.purple {
  color: white !important;
  background-color: purple !important;
  border-color: purple !important;
}
</style>
