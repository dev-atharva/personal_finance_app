<script>
  import Sidenav from "../../components/sidenav.svelte";
  import BalanceCard from "./Balance_card.svelte";
  import MoneyStats from "./Money_stats.svelte";
  import OverviewHeader from "./Overview_header.svelte";
</script>

<style>
   .bg-color {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
 
</style>

<div class="flex flex-row gap-x-2 bg-violet-950 p-2">
  <div class="min-h-[10%] sm:min-h-[5%]">
    <Sidenav />
  </div>
  <div class="min-w-[90%] min-h-screen flex flex-col gap-y-2" >
    <OverviewHeader/>
    <div class="flex flex-col min-h-[91.2%] flex-wrap bg-color p-3 gap-x-2">
      <div class="flex flex-col min-h-full bg-color min-w-[40%] z-10">

      </div>
      <div class="flex flex-col min-h-full  min-w-[60%] z-10">
        <BalanceCard/>
        <MoneyStats />
      </div>
    </div>
  </div>
</div>
