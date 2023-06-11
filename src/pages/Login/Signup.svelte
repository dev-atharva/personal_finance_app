<script>
  import user_login from "../../store/store";
  let username = "";
  let password = "";
  let confirm_passowrd = "";

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

<div class="p-4 flex items-center">
  <span class="text-white font-bold">SIgn up Form </span>
</div>
<div class="p-4">
  <input
    class="border-white border rounded-md px-4 py-2 bg-transparent placeholder:text-white"
    type="text"
    placeholder="Enter the username"
    bind:value={username}
  />
</div>
<div class="p-4">
  <input
    class="border-white border rounded-md px-4 py-2 bg-transparent text-white placeholder:text-white"
    type="password"
    placeholder="Enter the password"
    bind:value={password}
  />
</div>
<div class="p-4">
  <input
    class="border-white border rounded-md px-4 py-2 bg-transparent placeholder:text-white"
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
