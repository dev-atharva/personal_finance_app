<script>
  import user_login from "../../store/store.js";
  import { onDestroy } from "svelte";
  import Signin from "../Login/index.svelte";
  import Sidenav from "../../components/sidenav.svelte";
  let sign_in = false;

  const unsubscribe = user_login.subscribe((new_value) => {
    sign_in = new_value;
  });

  onDestroy(() => {
    unsubscribe();
  });

  import Header from "../../components/header.svelte";

</script>
<main>
<div class="flex flex-col justify-center">
  {#if !sign_in}
    <Signin />
  {:else}
  <div>
    <Sidenav />
  </div>
    Shree Ram
  {/if}
</div>
</main>


<style>
</style>



