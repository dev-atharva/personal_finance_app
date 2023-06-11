<script>
  import { Route, Router } from "svelte-routing";
  import Overview from "./pages/Overview/index.svelte";
  import Transactions from "./pages/Transactions/index.svelte";
  import Analytics from "./pages/Analytics/index.svelte";
  import Cards from "./pages/Cards/index.svelte";
  import Login from "./pages/Login/index.svelte";
</script>

<main>
  <Router>
    <Route path="/" component={Overview} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/analytics" component={Analytics} />
    <Route path="/cards" component={Cards} />
    <Route path="/login" component={Login} />
  </Router>
</main>

<style>
</style>
