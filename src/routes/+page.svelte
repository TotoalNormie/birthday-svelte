<script>
    import Hello from '../lib/Hello.svelte'
    let text = '';
</script>

<Hello name={text}/>

<input type="text" bind:value={text}>
<p>abomus</p>
<!-- <h1>Changus!</h1> -->


