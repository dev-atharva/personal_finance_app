<script>
  import Signup from "./Signup.svelte";
  import Signin from "./Signin.svelte";
  import BackImage from "../../assets/endless-constellation.svg";
  let toggle = false;

  const handletoggle = () => {
    toggle = !toggle;
  };
</script>

<div class="w-screen h-screen bg-main-color flex items-center justify-center">
  <img src={BackImage} class='absolute w-full h-full object-cover mix-blend-overlay' alt="/" />
  <div
    class="flex flex-row lg:min-h-[50%] lg:min-w-[50%] rounded-xl justify-evenly sm:flex-wrap bg-color sm:min-h-[75%] p-2"
  >
    <div
      class="min-h-full min-w-[50%] flex flex-col justify-evenly items-center sm:min-h-[50%]"
    >
      {#if toggle === false}
        <div
          class=" slide min-h-full min-w-full bg-white h-10 rounded-lg flex items-center flex-col justify-evenly m-2"
        >
          If you have already signed up , you can Login

          <button
            class="rounded-full border-black border-2 px-4 py-2 text-black hover:bg-white hover:text-black"
            on:click={handletoggle}
            >Login
          </button>
        </div>
      {:else}
        <Signin />
      {/if}
    </div>

    <div
      class="min-h-full min-w-[50%] flex flex-col justify-evenly items-center sm:min-h-[50%]"
    >
      {#if toggle === true}
        <div
          class="min-h-full min-w-full bg-white h-2 rounded-lg flex items-center flex-col justify-evenly"
        >
          If you have not signup up , you can sign up

          <button
            class="rounded-full border-black border-2 px-4 py-2 text-black hover:bg-white hover:text-black m-2"
            on:click={handletoggle}
            >Sign up
          </button>
        </div>
      {:else}
        <Signup />
      {/if}
    </div>
  </div>
</div>

<style>
  @keyframes moveX {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px);
    }
    75% {
      transform: translateX(150px);
    }
    100% {
      transform: translateX(200px);
    }
  }

  .slide {
    transform: translateX(0);
    transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275) ease-in-out;
    animation: Movex 10s linear;
  }
/* 
  .bg-main-color {
    background: rgb(30, 113, 221);
  } */

  .bg-color {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
</style>
