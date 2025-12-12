<script>
export default { name : "LoginView" };
</script>

<template>
  <main class="bg-dark">
  <form>
    <div class="p-4 col-lg-6 mx-auto">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 col-lg-6 mx-auto">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check col-lg-6 mx-auto">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <div class="p-4 form-check col-lg-2 mx-auto">
    <button type="submit" class="btn purple">Submit</button>
    </div>
  </form>
  </main>
</template>

<style>
.purple {
  color: white !important;
  background-color: purple !important;
  border-color: purple !important;
}
</style>