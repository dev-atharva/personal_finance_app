<div
  class="flex flex-row min-w-full p-2 rounded-lg bg-color justify-around items-center flex-wrap"
>
  <div class="font-bold text-lg text-white">
    <span class="text-3xl">OVERVIEW</span>
  </div>
  <div
    class="min-w-[40%] bg-transparent text-ellipsis text-white z-10 bg-color p-2"
  >
    <input
      placeholder="You can search anything here ...."
      class="placeholder:text-white text-ellipsis font-bold text-left min-w-full bg-transparent min-h-full outline-none"
    />
  </div>
  <div class="flex flex-row justify-evenly">
    <div class="m-2 p-2 cursor-pointer bg-color z-12 text-white">
      <button>Message</button>
    </div>
    <div class="m-2 p-2 cursor-pointer bg-color z-12 text-white">
      <button>Logout</button>
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
