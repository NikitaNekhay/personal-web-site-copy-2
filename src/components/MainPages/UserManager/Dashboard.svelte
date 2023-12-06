<script>
    import CartTable from "./CartTable.svelte";
import UserTable from "./UserTable.svelte";

 
</script>
<main>
  <section class="grid h-screen px-4 bg-white place-content-center gap-y-40">
    <h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl ">
      MANAGING USERS ACCOUNTS
    <h1>
  </section>
  <section class="grid h-screen px-4 bg-white place-content-center">
    <div class="">
      <UserTable/>
    </div>
  </section>
  <section class="grid h-screen px-4 bg-white place-content-center gap-y-40">
    <CartTable />
  </section>


  </main> 

