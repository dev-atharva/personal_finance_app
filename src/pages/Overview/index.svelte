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

  import Layout from "./Layout.svelte";
</script>

<main >
  {#if !sign_in}
    <Signin />
  {:else}
    <Layout />
  {/if}
</main>

<style>
 
</style>
