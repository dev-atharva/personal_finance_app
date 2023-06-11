<script>
  import user_login from "../../store/store";
  let password = "";
  let username = "";

  const handlesubmit_signin = () => {
    if (username === "atharva" && password === "atharva") {
      user_login.set(true);
    } else {
      alert("Haglas mitra");
      return;
    }
  };
</script>

<div class="p-4 flex items-center">
  <span class="text-white font-bold">Login Form </span>
</div>

<div>
  <input
    class=" border-white border rounded-md px-4 py-2 bg-transparent font-bold text-white placeholder:text-white"
    type="text"
    placeholder="Enter the username"
    bind:value={username}
  />
</div>
<div>
  <input
    class="text-white border-white border rounded-md px-4 py-2 bg-transparent placeholder:text-white font-bold"
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
