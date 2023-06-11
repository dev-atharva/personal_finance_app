<script>
  import { Link } from "svelte-routing";
  import { isSidenavOpen } from '../store/store.js';
  import close from '../assets/close.png';
  import overview from '../assets/overview.png';
  import transactions from '../assets/transaction.svg';
  import analytics from '../assets/analytics.svg';
  import cards from '../assets/card.svg';
  import settings from '../assets/settings.svg';
  import support from '../assets/support.png';

  const closeSidenav = () => {
    $isSidenavOpen = false;
};

function handleImageKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      closeSidenav();
    }
  }
</script>
  
  <div class="fixed top-0 left-0 bottom-0 w-64 bg-gray-100 p-4 text-black border-r-2 border-grey">
    <div class="flex items-center mb-8">
      <img class="h-8 w-8 mr-2" src="logo.png" alt="Logo" />
      <h1 class="text-lg font-bold">Personal Finance App</h1>
      <img class="h-8 w-8 mr-2 cursor-pointer" src={close} alt="Close" on:click={closeSidenav} on:keydown={handleImageKeyDown}/>
    </div>
  
    <div class="flex items-center mb-6">
      <!-- <img class="h-8 w-8 rounded-full mr-2" src="user.png" alt="User Profile" /> -->
      <p class="text-sm">John Doe</p>
    </div>
  
    <ul class="mb-6">
      <li class="mb-2 pb-2"><Link to="/" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={overview} alt="Overview"/>Overview</Link></li>
      <li class="mb-2 pb-2"><Link to="/transactions" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={transactions} alt="Transactions"/>Transactions</Link></li>
      <li class="mb-2 pb-2"><Link to="/analytics" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={analytics} alt="Analytics"/>Analytics</Link></li>
      <li class="mb-2"><Link to="/cards" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={cards} alt="Cards"/>Cards</Link></li>
    </ul>
    <hr class="black">
    <ul>
      <li class="mb-2 pt-2 pb-2"><Link to="/" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={settings} alt="Close"/>Settings</Link></li>
      <li class="mb-2"><Link to="/" class="flex items-center"><img class="h-8 w-8 mr-2 cursor-pointer" src={support} alt="Close"/>Help/Support</Link></li>
    </ul>
  </div>
  
  <style>

  </style>
  