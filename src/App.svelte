<script>
  import { Route,Router } from "svelte-routing";
  import Overview from "./pages/Overview/index.svelte";
  import Transactions from "./pages/Transactions/index.svelte";
  import  Analytics from "./pages/Analytics/index.svelte";
  import Cards from "./pages/Cards/index.svelte"


</script>



<style>

 
</style>

<main>
  <Router>
    <Route path="/" component={Overview}/>
    <Route path="/transactions" component={Transactions}/>
    <Route path="/analytics" component={Analytics}/>
    <Route path="/cards" component={Cards}/>
 
  </Router>

</main>