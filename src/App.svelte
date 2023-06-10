<script>

  import { Route,Router } from "svelte-routing";
  import Overview from "./pages/Overview/index.svelte";
  import Transactions from "./pages/Transactions/index.svelte";
  import Analytics from "./pages/Analytics/index.svelte";
  import Cards from "./pages/Cards/index.svelte"


</script>


<<<<<<< Updated upstream

<style>

 
</style>

=======
>>>>>>> Stashed changes
<main>
  <Router>
    <Route path="/" component={Overview}/>
    <Route path="/transactions" component={Transactions}/>
    <Route path="/analytics" component={Analytics}/>
    <Route path="/cards" component={Cards}/>
<<<<<<< Updated upstream
 
  </Router>

</main>
=======
  </Router>

</main>


<style>
  @import 'tailwindcss/tailwind.css';
</style>
>>>>>>> Stashed changes
