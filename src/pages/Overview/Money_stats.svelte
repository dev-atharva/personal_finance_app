<script>
  let dropdown_clicked = false;

  const handeltoggle_dropdown = () => {
    dropdown_clicked = !dropdown_clicked;
  };
</script>

<div class="flex flex-col m-1 p-3 bg-color">
  <div
    class="text-xl font-bold flex flex-row content-center justify-between p-2 text-white"
  >
    <div>Monthly Statictics</div>
    <div class="relative inline-block text-left">
      <button
        type="button"
        class=" bg-transparent text-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        on:click={handeltoggle_dropdown}
      >
        Monthly
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {#if dropdown_clicked}
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-color shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              class="text-white block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0">Daily</a
            >
            <a
              class="text-white block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1">Weekly</a
            >
            <a
              class="text-white block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2">Yearly</a
            >
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

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
