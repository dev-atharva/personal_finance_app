<script>
  import user_login from "../../store/store";
  let toggle = false;
  let username = "";
  let password = "";
  let confirm_passowrd = "";

  const handletoggle = () => {
    toggle = !toggle;
  };
  const handlesubmit_signin = () => {
    if (username === "atharva" && password === "atharva") {
      user_login.set(true);
    } else {
      alert("Haglas mitra");
      return;
    }
  };
  const handlesubmit_signup = () => {
    if (
      !username ||
      !password ||
      !confirm_passowrd ||
      password !== confirm_passowrd
    ) {
      alert("Haglas mitra");
      return;
    }
    user_login.set(true);
  };
</script>

<div class="w-screen h-screen bg-violet-950 flex items-center justify-center">
  <div
    class="flex flex-row lg:min-h-[50%] lg:min-w-[50%] rounded-xl justify-evenly sm:flex-wrap bg-color sm:min-h-[75%] p-2"
  >
    <div class="blob" />
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
        <div class="p-4 flex items-center">
          <span class="text-white font-bold">Login Form </span>
        </div>

        <div>
          <input
            class="text-white border-white border rounded-md px-4 py-2 bg-transparent"
            type="text"
            placeholder="Enter the username"
            bind:value={username}
          />
        </div>
        <div>
          <input
            class="text-white border-white border rounded-md px-4 py-2 bg-transparent"
            type="password"
            placeholder="Enter the password"
            bind:value={password}
          />
        </div>
        <button
          class="rounded-full border-white border-2 px-4 py-2 text-white hover:bg-white hover:text-black"
          on:click={handlesubmit_signin}
        >
          Submit
        </button>
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
        <div class="p-4 flex items-center">
          <span class="text-white font-bold">SIgn up Form </span>
        </div>
        <div class="p-4">
          <input
            class="border-white border rounded-md px-4 py-2 bg-transparent"
            type="text"
            placeholder="Enter the username"
            bind:value={username}
          />
        </div>
        <div class="p-4">
          <input
            class="border-white border rounded-md px-4 py-2 bg-transparent text-white"
            type="password"
            placeholder="Enter the password"
            bind:value={password}
          />
        </div>
        <div class="p-4">
          <input
            class="border-white border rounded-md px-4 py-2 bg-transparent"
            type="password"
            placeholder="Confirm the password"
            bind:value={confirm_passowrd}
          />
        </div>
        <button
          class="rounded-full border-white border-2 px-4 py-2 text-white hover:bg-white hover:text-black"
          on:click={handlesubmit_signup}
        >
          Submit
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
  .slide {
    transform: translateX(0);
    transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275) ease-in-out;
  }

  .bg-color {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .blob {
    position: absolute;
    width: 500px;
    height: 500px;
    background: linear-gradient(
      180deg,
      rgba(47, 184, 255, 0.42) 31.77%,
      #5c9df1 100%
    );
    mix-blend-mode: color-dodge;
    -webkit-animation: move 25s infinite alternate;
    animation: move 25s infinite alternate;
    transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  }

  .blob:hover {
    width: 520px;
    height: 520px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba8,
      inset 300px 300px 0 0px #2b86c5;
  }

  @-webkit-keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }

  @keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }
</style>
