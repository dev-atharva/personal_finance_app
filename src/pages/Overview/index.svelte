<script>
  import user_login from "../../store/store.js";
  import { onDestroy } from "svelte";
  import Signin from "../Login/index.svelte";
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
  <div>
    <Header/>
  </div>
<div class="flex flex-col justify-center">
  {#if !sign_in}
    <Signin />
  {:else}
    Shree Ram
  {/if}
</div>
</main>


<style>
</style>



